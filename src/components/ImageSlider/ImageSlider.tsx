import { useState, useEffect, useRef, useCallback, ReactNode } from "react";
import { SliderContainer, SlidesWrapper } from "./ImageSlider.styles";
import Slide from "./Slide";
import Navigation, { NavigationProps } from "./Navigation";
import Pagination, { PaginationProps } from "./Pagination";

export interface SlideItem {
  imageUrl: string;
  altText: string;
}

export interface ImageSliderProps {
  slides: SlideItem[];
  width: number;
  height: number;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  autoPlay?: boolean;
  autoPlayInterval?: number;
  loop?: boolean;
  showNavigation?: boolean;
  showPagination?: boolean;
  onClickImage?: (index: number) => void;
  onSlideChange?: (currentIndex: number) => void;
  renderNavigation?: (props: NavigationProps) => ReactNode;
  renderPagination?: (props: PaginationProps) => ReactNode;
}

const ImageSlider = ({
  slides,
  width,
  height,
  objectFit = "cover",
  autoPlay = false,
  autoPlayInterval = 3000,
  loop = false,
  showNavigation = true,
  showPagination = true,
  onSlideChange,
  onClickImage,
  renderNavigation,
  renderPagination,
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [animation, setAnimation] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const totalSlides = slides.length;

  const getPositionX = (e: React.TouchEvent | React.MouseEvent) => {
    return e.type.includes("mouse")
      ? (e as React.MouseEvent).clientX
      : (e as React.TouchEvent).touches[0].clientX;
  };

  const goToSlide = useCallback(
    (index: number) => {
      let newIndex = index;
      if (index < 0) {
        newIndex = loop ? totalSlides - 1 : 0;
      } else if (index >= totalSlides) {
        newIndex = loop ? 0 : totalSlides - 1;
      }
      setCurrentIndex(newIndex);
      onSlideChange && onSlideChange(newIndex);
    },
    [loop, totalSlides, onSlideChange]
  );

  const goToNextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const goToPrevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // 자동 슬라이드 기능
  useEffect(() => {
    let slideInterval: NodeJS.Timeout;
    if (autoPlay && !isDragging) {
      slideInterval = setInterval(() => {
        goToNextSlide();
      }, autoPlayInterval);
    }
    return () => {
      slideInterval && clearInterval(slideInterval);
    };
  }, [autoPlay, autoPlayInterval, goToNextSlide, isDragging]);

  // 드래그 기능 구현
  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    setAnimation(false);
    setStartPos(getPositionX(e));
    setPrevTranslate(-currentIndex * 100);
    // 이미지 드래그 방지
    e.preventDefault();
  };

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    const currentPosition = getPositionX(e);
    const diff = currentPosition - startPos;
    let moveBy = (diff / sliderRef.current!.offsetWidth) * 100;

    // 한 슬라이드 이상으로 이동하지 않도록 제한
    if (moveBy > 100) moveBy = 100;
    if (moveBy < -100) moveBy = -100;

    setCurrentTranslate(prevTranslate + moveBy);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setAnimation(true);
    const movedBy = currentTranslate - prevTranslate;

    // 이동 거리가 25% 이상이면 슬라이드 변경
    if (movedBy < -25) {
      goToNextSlide();
    } else if (movedBy > 25) {
      goToPrevSlide();
    } else {
      // 원래 위치로 돌아가기
      setCurrentTranslate(-currentIndex * 100);
    }
  };

  useEffect(() => {
    if (!isDragging) {
      setCurrentTranslate(-currentIndex * 100);
    }
  }, [currentIndex, isDragging]);

  // 키보드 내비게이션
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowLeft") {
        goToPrevSlide();
      } else if (e.key === "ArrowRight") {
        goToNextSlide();
      }
    },
    [goToPrevSlide, goToNextSlide]
  );

  return (
    <SliderContainer
      ref={sliderRef}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={() => isDragging && handleDragEnd()}
      onDragStart={(e) => e.preventDefault()} // 기본 드래그 동작 방지
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-roledescription="carousel"
      aria-label="이미지 슬라이더"
      onClick={() => onClickImage && onClickImage(currentIndex)}
      $width={width}
      $height={height}
    >
      <SlidesWrapper $translateX={currentTranslate} $transition={animation}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            isActive={index === currentIndex}
            objectFit={objectFit}
            width={width}
            height={height}
          />
        ))}
      </SlidesWrapper>
      {renderNavigation
        ? renderNavigation({ goToNextSlide, goToPrevSlide, currentIndex })
        : showNavigation && (
            <Navigation
              currentIndex={currentIndex}
              goToNextSlide={goToNextSlide}
              goToPrevSlide={goToPrevSlide}
            />
          )}
      {renderPagination
        ? renderPagination({ slides, currentIndex, goToSlide })
        : showPagination && (
            <Pagination
              slides={slides}
              currentIndex={currentIndex}
              goToSlide={goToSlide}
            />
          )}
    </SliderContainer>
  );
};

export default ImageSlider;

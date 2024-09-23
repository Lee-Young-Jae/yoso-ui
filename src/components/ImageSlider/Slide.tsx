import { useEffect, useRef, useState } from "react";

import { Placeholder, SlideContainer, SlideImage } from "./ImageSlider.styles";
import { SlideItem } from "./ImageSlider";

interface SlideProps {
  slide: SlideItem;
  isActive: boolean;
  width: number;
  height: number;
  objectFit: "cover" | "contain" | "fill" | "none" | "scale-down";
}

const Slide = ({ slide, isActive, width, height, objectFit }: SlideProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const imgElement = imgRef.current;
    let observer: IntersectionObserver;

    if (imgElement) {
      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                imgElement.src = imgElement.dataset.src!;
                observer.unobserve(imgElement);
              }
            });
          },
          {
            threshold: 0.1,
          }
        );
        observer.observe(imgElement);
      } else {
        // Intersection Observer를 지원하지 않는 브라우저 처리
        imgElement.src = imgElement.dataset.src!;
      }
    }

    return () => {
      observer && observer.disconnect();
    };
  }, []);
  return (
    <SlideContainer aria-hidden={!isActive}>
      {!isLoaded && <Placeholder $width={width} $height={height} />}
      <SlideImage
        ref={imgRef}
        data-src={slide.imageUrl}
        alt={slide.altText}
        $isLoaded={isLoaded}
        width={width}
        height={height}
        $objectFit={objectFit}
        onLoad={() => setIsLoaded(true)}
      />
    </SlideContainer>
  );
};

export default Slide;

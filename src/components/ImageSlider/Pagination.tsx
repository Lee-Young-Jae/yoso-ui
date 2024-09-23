import { SlideItem } from "./ImageSlider";
import { Dot, PaginationContainer } from "./ImageSlider.styles";

export interface PaginationProps {
  slides: SlideItem[];
  currentIndex: number;
  goToSlide: (index: number) => void;
}

const Pagination = ({ slides, currentIndex, goToSlide }: PaginationProps) => (
  <PaginationContainer>
    {slides.map((_, index) => (
      <Dot
        key={index}
        $isActive={index === currentIndex}
        onClick={() => goToSlide(index)}
        aria-label={`${index + 1}번째 슬라이드로 이동`}
      />
    ))}
  </PaginationContainer>
);

export default Pagination;

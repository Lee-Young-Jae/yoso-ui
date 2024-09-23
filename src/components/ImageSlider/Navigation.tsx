import { NavButton, NavigationContainer } from "./ImageSlider.styles";

export interface NavigationProps {
  goToNextSlide: () => void;
  goToPrevSlide: () => void;
  currentIndex: number;
}

const Navigation = ({ goToNextSlide, goToPrevSlide }: NavigationProps) => (
  <NavigationContainer>
    <NavButton onClick={goToPrevSlide} aria-label="이전 슬라이드">
      &#10094;
    </NavButton>
    <NavButton onClick={goToNextSlide} aria-label="다음 슬라이드">
      &#10095;
    </NavButton>
  </NavigationContainer>
);

export default Navigation;

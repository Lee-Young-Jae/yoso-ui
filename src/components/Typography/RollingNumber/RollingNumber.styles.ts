import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.05em;
`;

interface DigitWrapperProps {
  $duration: number;
  $timingFunction: string;
  $currentDigit: number;
}

export const DigitWrapper = styled.div<DigitWrapperProps>`
  overflow: hidden;
  display: inline-block;
  position: relative;
  width: 0.8em;
  height: var(--digit-height);
  font-size: 1.2em;

  --digit-height: 1em; // 숫자 높이

  ${({ $currentDigit, $duration, $timingFunction }) => css`
    & > div {
      animation: ${slideAnimation($currentDigit)} ${$duration}s
        ${$timingFunction} forwards;
    }
  `}
`;

const slideAnimation = (currentDigit: number) => keyframes`
  to {
    transform: translateY(calc(-1 * ${currentDigit} * var(--digit-height)));
  }
`;

export const DigitList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Digit = styled.div`
  height: var(--digit-height);
  line-height: var(--digit-height);
  font-size: 1em;
  text-align: center;
`;

import styled, { keyframes } from "styled-components";
import defaultTheme from "../../styles/theme";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const progressBar = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const StyledToastWrapper = styled.div<{ $duration: number }>`
  animation: ${slideIn} 0.3s ease-out,
    ${slideOut} 0.3s ease-in ${({ $duration }) => $duration - 300}ms forwards;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  max-width: 400px;
  min-width: 250px;
`;

export const StyledToastInner = styled.div<{ $type: string }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.WHITE};

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  strong {
    color: ${({ theme }) => theme.colors.BLACK};
  }

  p {
    color: ${({ theme }) => theme.colors.GRAY_600};
    margin: 0;
    padding: 0;
  }
`;

export function getToastColor(type: string) {
  switch (type) {
    case "success":
      return defaultTheme.colors.BLUE_500;
    case "error":
      return defaultTheme.colors.RED_500;
    case "warning":
      return defaultTheme.colors.RED_300;
    default:
      return defaultTheme.defaultColor;
  }
}

export const getRGBA = (color: string, alpha: number) => {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const ProgressBar = styled.div<{ $duration: number; $type: string }>`
  position: relative;
  height: 4px;
  box-shadow: 0 2px 4px ${({ $type }) => getRGBA(getToastColor($type), 0.5)};
  background: ${({ $type }) => getToastColor($type)};
  overflow: hidden;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    animation: ${progressBar} ${({ $duration }) => $duration}ms linear;
  }
`;

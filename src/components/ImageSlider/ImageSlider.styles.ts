import styled from "styled-components";
import { getRGBA } from "../../utils";

export const SliderContainer = styled.div<{
  $width: number;
  $height: number;
}>`
  position: relative;
  overflow: hidden;
  touch-action: pan-y; // 가로 슬라이드 방지
  user-select: none; // 드래그 방지
  -webkit-user-drag: none; // Safari 이미지 드래그 방지
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
`;

export const SlidesWrapper = styled.div<{
  $translateX: number;
  $transition: boolean;
}>`
  display: flex;
  transition: ${({ $transition }) =>
    $transition ? "transform 0.3s ease-in-out" : "none"};
  transform: translateX(${({ $translateX }) => $translateX}%);
  will-change: transform;
`;

export const SlideContainer = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`;

export const SlideImage = styled.img<{
  $isLoaded: boolean;
  $objectFit: "cover" | "contain" | "fill" | "none" | "scale-down";
  width: number;
  height: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: block;
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  pointer-events: none;
  object-fit: ${({ $objectFit }) => $objectFit};
`;

export const Placeholder = styled.div<{ $width: number; $height: number }>`
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => getRGBA(theme.colors.BLACK, 0.1)};
`;

export const NavigationContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 ${({ theme }) => theme.spacing.small};
  box-sizing: border-box;
`;

export const NavButton = styled.button`
  background: ${({ theme }) => getRGBA(theme.colors.BLACK, 0.3)};
  border: none;
  border-radius: 50%;
  width: ${({ theme }) => theme.spacing.small};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  font-size: 12px;
`;

export const PaginationContainer = styled.div`
  position: absolute;
  bottom: 15px;
  width: 100%;
  text-align: center;
`;

export const Dot = styled.button<{ $isActive: boolean }>`
  cursor: pointer;
  margin: 0 4px;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.BLACK : getRGBA(theme.colors.BLACK, 0.3)};
  border: none;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.3s ease;
  width: ${({ theme }) => theme.spacing.medium};
  height: ${({ theme }) => theme.spacing.medium};
  padding: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.BLACK};
  }
`;

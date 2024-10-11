import styled, { css } from "styled-components";
import { getRGBA } from "../../utils";

export const SliderContainer = styled.div<{
  $width: number | string;
  $height: number | string;
}>`
  position: relative;
  overflow: hidden;
  touch-action: pan-y; // 가로 슬라이드 방지
  user-select: none; // 드래그 방지
  -webkit-user-drag: none; // Safari 이미지 드래그 방지
  width: ${({ $width }) =>
    typeof $width === "number" ? `${$width}px` : $width};
  height: ${({ $height }) =>
    typeof $height === "number" ? `${$height}px` : $height};
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
  width: number | string;
  height: number | string;
}>`
  width: ${({ width }) => (typeof width === "number" ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === "number" ? `${height}px` : height};
  display: block;
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  pointer-events: none;
  object-fit: ${({ $objectFit }) => $objectFit};
`;

export const Placeholder = styled.div`
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
  border: none;
  background: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  font-size: 22px;
  text-shadow: 0 0 1px ${({ theme }) => theme.colors.black};
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  position: absolute;
  bottom: 15px;
  width: 100%;
  text-align: center;
`;

export const Dot = styled.button<{ $isActive: boolean }>`
  cursor: pointer;
  margin: 0 4px;
  padding: 0;
  border: none;
  display: inline-block;
  height: ${({ theme }) => theme.spacing.medium};

  ${({ $isActive, theme }) =>
    $isActive
      ? css`
          box-shadow: 0 0 1px ${theme.colors.black};
          background-color: ${theme.colors.white};
          border-radius: ${theme.spacing.large};
          width: ${theme.spacing.large};
        `
      : css`
          box-shadow: 0 0 1px ${theme.colors.white};
          background-color: ${theme.colors.gray[600]};
          border-radius: ${theme.spacing.medium};
          width: ${theme.spacing.medium};
        `}

  &:focus {
    outline: none;
  }
`;

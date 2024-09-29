import styled from "styled-components";

export const StyledHighlight = styled.span<{
  $color?: string;
  $offsetX?: number;
  $offsetY?: number;
  $width?: number;
  $height?: number;
}>`
  position: relative;
  display: inline-block;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $width }) => $width}%;
    height: ${({ $height }) => $height}%;
    background-color: ${({ $color }) => $color};
    border-radius: 1px;
    z-index: -1;
    transform: translate(
      ${({ $offsetX }) => $offsetX}px,
      ${({ $offsetY }) => $offsetY}px
    );
  }
`;

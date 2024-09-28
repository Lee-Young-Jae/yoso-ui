"use client";

import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import defaultTheme from "../../../styles/theme";
import { getRGBA } from "../../../utils";
import { StyledHighlight } from "./Hightlight.styles";

interface HighlightProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  color?: string;
  offsetY?: number;
  offsetX?: number;
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
}

const Highlight = ({
  children,
  color = getRGBA(defaultTheme.defaultColor, 0.3),
  offsetX = 0,
  offsetY = 0,
  width = 100,
  height = 50,
  className,
  style,
}: HighlightProps) => {
  return (
    <StyledHighlight
      style={style}
      className={className}
      $color={color}
      $width={width}
      $height={height}
      $offsetX={offsetX}
      $offsetY={offsetY}
    >
      {children}
    </StyledHighlight>
  );
};

export default Highlight;

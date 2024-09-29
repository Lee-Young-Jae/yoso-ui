"use client";

import { HTMLAttributes, ReactNode } from "react";

import Highlight from "../Hightlight/Hightlight";
import { CSSProperties } from "styled-components";
import defaultTheme from "../../../styles/theme";

interface UnderlineProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

const Underline = ({
  children,
  color,
  className,
  style,
  ...props
}: UnderlineProps) => {
  return (
    <Highlight
      style={style}
      className={className}
      color={typeof color === "string" ? color : defaultTheme.defaultColor}
      height={10}
      width={100}
      offsetY={1}
      offsetX={0}
      {...props}
    >
      {children}
    </Highlight>
  );
};

export default Underline;

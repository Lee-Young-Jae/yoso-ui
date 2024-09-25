import { MouseEventHandler, ReactElement, ReactNode } from "react";
import styled, { css } from "styled-components";

type Variant = "primary" | "secondary" | "ghost" | "danger" | "default";
type Size = "xsmall" | "small" | "medium" | "large";
type Radius = "none" | "small" | "medium" | "large";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: Variant;
  size?: Size;
  radius?: Radius;
  outline?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  color?: string;
}

const StyledButton = styled.button<{
  $variant: ButtonProps["variant"];
  $size: ButtonProps["size"];
  $radius: ButtonProps["radius"];
  $fullWidth: ButtonProps["fullWidth"];
  $outline: ButtonProps["outline"];
  $color: ButtonProps["color"];
}>`
  // 공통 스타일
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing.small};
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: inherit;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  transition: ${({ theme }) => theme.transitions.fast};
  white-space: nowrap;

  // 크기
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  // 사이즈
  ${({ $size, theme }) => {
    switch ($size) {
      case "xsmall":
        return css`
          font-size: ${theme.fontSizes.small};
          padding: ${theme.spacing.small} ${theme.spacing.medium};
        `;
      case "small":
        return css`
          font-size: ${theme.fontSizes.small};
          padding: ${theme.spacing.medium} ${theme.spacing.large};
        `;
      case "large":
        return css`
          font-size: ${theme.fontSizes.large};
          padding: ${theme.spacing.large} ${theme.spacing.xLarge};
        `;
      default: // medium
        return css`
          font-size: ${theme.fontSizes.medium};
          padding: ${theme.spacing.medium} ${theme.spacing.large};
        `;
    }
  }}

  // 라디우스
  ${({ $radius, theme }) => {
    switch ($radius) {
      case "none":
        return css`
          border-radius: 0;
        `;
      case "small":
        return css`
          border-radius: ${theme.borderRadius.small};
        `;
      case "large":
        return css`
          border-radius: ${theme.borderRadius.large};
        `;
      default: // medium
        return css`
          border-radius: ${theme.borderRadius.medium};
        `;
    }
  }}

  // 색상
  ${({ $variant, $outline, theme, $color }) => {
    const getColor = (variant: Variant | undefined) => {
      if ($color) return $color;

      switch (variant) {
        case "secondary":
          return theme.colors.GRAY_500;
        case "danger":
          return theme.colors.RED_500;
        case "ghost":
        case "default":
          return theme.defaultColor;
        default:
          return theme.defaultColor;
      }
    };

    const color = getColor($variant);

    if ($outline) {
      return css`
        color: ${color};
        background-color: transparent;
        border-color: ${color};
        &:hover:not(:disabled) {
          color: white;
          background-color: ${color};
        }
      `;
    } else if ($variant === "ghost") {
      return css`
        color: ${color};
        background-color: transparent;
        border-color: transparent;
        &:hover:not(:disabled) {
          background-color: ${theme.colors.GRAY_100};
        }
      `;
    } else {
      return css`
        color: white;
        background-color: ${color};
        border-color: ${color};
        &:hover:not(:disabled) {
          background-color: ${theme.colors[
            `${$variant?.toUpperCase()}_700` as keyof typeof theme.colors
          ] || color};
          border-color: ${theme.colors[
            `${$variant?.toUpperCase()}_700` as keyof typeof theme.colors
          ] || color};
        }
      `;
    }
  }}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.BLUE_100};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button = ({
  children,
  onClick,
  variant = "default",
  disabled = false,
  fullWidth = false,
  size = "medium",
  radius = "medium",
  outline = false,
  leftIcon,
  rightIcon,
  color,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      type="button"
      $variant={variant}
      $fullWidth={fullWidth}
      $size={size}
      $radius={radius}
      $outline={outline}
      $color={color}
      {...props}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </StyledButton>
  );
};

export default Button;

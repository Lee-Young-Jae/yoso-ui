import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";
import { darken, getRGBA, lighten } from "../../utils";

const sizeStyles = {
  xsmall: css`
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  `,
  small: css`
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  `,
  medium: css`
    font-size: ${({ theme }) => theme.fontSizes.medium};
    padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
  `,
  large: css`
    font-size: ${({ theme }) => theme.fontSizes.large};
    padding: ${({ theme }) => `${theme.spacing.large} ${theme.spacing.xlarge}`};
  `,
};

const radiusStyles = {
  none: css`
    border-radius: 0;
  `,
  small: css`
    border-radius: ${({ theme }) => theme.borderRadius.small};
  `,
  medium: css`
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  `,
  large: css`
    border-radius: ${({ theme }) => theme.borderRadius.large};
  `,
};

export const StyledButton = styled.button<{
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
  ${({ $size }) => sizeStyles[$size || "medium"]}

  // 라디우스
  ${({ $radius }) => radiusStyles[$radius || "medium"]}

  // 색상
  ${({ $variant, $outline, theme, $color }) => {
    const variantColors = {
      primary: theme.colors.primary,
      secondary: theme.colors.secondary,
      danger: theme.colors.error,
      ghost: theme.colors.secondary,
      default: theme.defaultColor,
    };

    const color = $color || variantColors[$variant || "default"];
    const hoverColors = {
      primary: darken(theme.colors.primary, 0.1),
      secondary: darken(theme.colors.secondary, 0.1),
      danger: darken(theme.colors.error, 0.1),
      ghost: lighten(theme.colors.secondary, 0.9),
      default: darken(theme.defaultColor, 0.1),
    };
    const hoverColor = hoverColors[$variant || "default"];

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
          background-color: ${theme.colors.gray[100]};
        }
      `;
    } else {
      return css`
        color: white;
        background-color: ${color};
        border-color: ${color};
        &:hover:not(:disabled) {
          background-color: ${hoverColor};
          border-color: ${hoverColor};
        }
      `;
    }
  }}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => getRGBA(theme.defaultColor, 0.3)};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

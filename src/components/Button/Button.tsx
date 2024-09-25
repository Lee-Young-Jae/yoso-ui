import { MouseEventHandler, ReactElement, ReactNode } from "react";
import { StyledButton } from "./Button.styles";

export type Variant = "primary" | "secondary" | "ghost" | "danger" | "default";
export type Size = "xsmall" | "small" | "medium" | "large";
export type Radius = "none" | "small" | "medium" | "large";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
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
  className,
  style,
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
      className={className}
      style={style}
      {...props}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </StyledButton>
  );
};

export default Button;

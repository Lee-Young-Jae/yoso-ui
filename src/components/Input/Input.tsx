"use client";

import React, { forwardRef, useId } from "react";
import {
  InputContainer,
  Label,
  InputWrapper,
  StyledInput,
  IconContainer,
  HelperText,
} from "./Input.styles";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
  radius?: "none" | "small" | "medium" | "large";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      fullWidth = false,
      size = "medium",
      radius = "medium",
      disabled = false,
      className,
      style,
      id,
      ...props
    },
    ref
  ) => {
    const uid = useId();
    const inputId = id || uid;
    const hasIcon = Boolean(leftIcon || rightIcon);

    return (
      <InputContainer
        $fullWidth={fullWidth}
        className={className}
        style={style}
      >
        {label && (
          <Label htmlFor={inputId}>
            {label}
            {props.required && <span aria-hidden={true}>*</span>}
          </Label>
        )}
        <InputWrapper
          $disabled={disabled}
          $error={Boolean(error)}
          $radius={radius}
        >
          {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
          <StyledInput
            id={inputId}
            ref={ref}
            disabled={disabled}
            $size={size}
            $hasIcon={hasIcon}
            aria-invalid={Boolean(error)}
            aria-disabled={disabled}
            {...props}
          />
          {rightIcon && <IconContainer>{rightIcon}</IconContainer>}
        </InputWrapper>
        {(helperText || error) && (
          <HelperText $error={Boolean(error)}>{error || helperText}</HelperText>
        )}
      </InputContainer>
    );
  }
);

Input.displayName = "Input";

export default Input;

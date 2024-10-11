"use client";

import React, { forwardRef, useEffect, useId, useRef } from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  LabelText,
  HelperText,
} from "./Checkbox.styles";

const CheckIcon = (
  <Icon viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </Icon>
);

const IndeterminateIcon = (
  <Icon viewBox="0 0 24 24">
    <line x1="4" y1="12" x2="20" y2="12" />
  </Icon>
);

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      label,
      error,
      helperText,
      disabled = false,
      indeterminate = false,
      checked,
      onChange,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const generatedid = useId();
    const checkboxId = `checkbox-${generatedid}`;

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <>
        <CheckboxContainer disabled={disabled}>
          <HiddenCheckbox
            type="checkbox"
            id={checkboxId}
            disabled={disabled}
            checked={checked}
            onChange={onChange}
            ref={(el) => {
              inputRef.current = el;
              if (typeof ref === "function") {
                ref(el);
              } else if (ref) {
                (
                  ref as React.MutableRefObject<HTMLInputElement | null>
                ).current = el;
              }
            }}
            {...props}
          />
          <StyledCheckbox
            $checked={checked}
            $indeterminate={indeterminate}
            disabled={disabled}
          >
            {indeterminate ? IndeterminateIcon : checked && CheckIcon}
          </StyledCheckbox>
          {label && <LabelText $disabled={disabled}>{label}</LabelText>}
        </CheckboxContainer>
        {(error || helperText) && (
          <HelperText $error={!!error}>{error || helperText}</HelperText>
        )}
      </>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;

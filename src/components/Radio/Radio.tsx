"use client";

import React, { ChangeEvent, forwardRef, ReactNode, useContext } from "react";
import {
  RadioContainer,
  HiddenRadioInput,
  StyledRadio,
  RadioLabel,
} from "./Radio.styles";
import RadioGroup, { RadioGroupContext } from "./RadioGroup";

interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value?: any;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color?: string;
  children: ReactNode;
}

const RadioButton = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      value,
      checked,
      color,
      disabled = false,
      className,
      style,
      autoFocus,
      onChange,
      children,
      name,
      ...props
    },
    ref
  ) => {
    const radioGroup = useContext(RadioGroupContext);
    const isDisabled = disabled || radioGroup?.disabled || false;
    const isChecked = radioGroup ? radioGroup.value === value : checked;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (radioGroup && radioGroup.onChange) {
        radioGroup.onChange(event);
      }
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <RadioContainer
        className={className}
        style={style}
        $disabled={isDisabled}
      >
        <HiddenRadioInput
          ref={ref}
          type="radio"
          disabled={isDisabled}
          aria-label={typeof children === "string" ? children : undefined}
          value={value}
          checked={isChecked}
          onChange={handleChange}
          autoFocus={autoFocus}
          name={radioGroup?.name || name}
          {...props}
        />
        <StyledRadio $color={color} $disabled={isDisabled}>
          <span />
        </StyledRadio>
        {children && <RadioLabel $disabled={isDisabled}>{children}</RadioLabel>}
      </RadioContainer>
    );
  }
);

RadioButton.displayName = "Radio";

type RadioComponent = typeof RadioButton & {
  Group: typeof RadioGroup;
};

const Radio = RadioButton as RadioComponent;
Radio.Group = RadioGroup;

export default Radio;

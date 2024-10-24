"use client";

import {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useState,
  CSSProperties,
} from "react";
import Radio from "./Radio";
import { RadioGroupContainer } from "./RadioGroup.styles";

interface RadioOptionType {
  label: ReactNode;
  value: any;
  disabled?: boolean;
}

interface RadioGroupContextProps {
  value?: any;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  disabled?: boolean;
}

export const RadioGroupContext = createContext<RadioGroupContextProps | null>(
  null
);

const useRadioGroup = () => {
  return useContext(RadioGroupContext);
};

interface RadioGroupProps {
  value?: any;
  defaultValue?: any;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  name?: string;
  disabled?: boolean;
  options?: RadioOptionType[];
  style?: CSSProperties;
  className?: string;
}

const RadioGroup = ({
  value,
  defaultValue,
  onChange,
  children,
  name,
  disabled = false,
  options,
  className,
  style,
}: RadioGroupProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const isControlled = value !== undefined;

  const currentValue = isControlled ? value : internalValue;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (!isControlled) {
      setInternalValue(newValue);
    }
    if (onChange) {
      onChange(event);
    }
  };

  const contextValue: RadioGroupContextProps = {
    value: currentValue,
    onChange: handleChange,
    name,
    disabled,
  };

  const renderOptions = () => {
    if (options && options.length > 0) {
      if (children) {
        console.warn(
          "RadioGroup: props로 'options'이 제공되었기 때문에 'children' 은 무시됩니다."
        );
      }
      return options.map((option) => (
        <Radio
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </Radio>
      ));
    }
    return children;
  };

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <RadioGroupContainer
        className={className}
        style={style}
        role="radiogroup"
      >
        {renderOptions()}
      </RadioGroupContainer>
    </RadioGroupContext.Provider>
  );
};

export { useRadioGroup };
export default RadioGroup;

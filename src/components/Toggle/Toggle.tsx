import {
  CSSProperties,
  ChangeEventHandler,
  InputHTMLAttributes,
  forwardRef,
} from "react";

import {
  ToggleContainer,
  ToggleSwitch,
  ToggleHandle,
  ToggleLabel,
} from "./Toggle.styles";

export type ToggleVariant = "solid" | "outline";
export type ToggleSize = "small" | "medium" | "large";

export interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  variant?: ToggleVariant;
  onText?: string;
  offText?: string;
  size?: ToggleSize;
  showText?: boolean;
  ariaLabel?: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  style?: CSSProperties;
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      disabled = false,
      variant = "solid",
      onText = "On",
      offText = "Off",
      size = "medium",
      showText = false,
      id,
      ariaLabel,
      checked,
      onChange,
      className,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <ToggleContainer
        $disabled={disabled}
        htmlFor={id}
        style={style}
        className={className}
      >
        <input
          ref={ref}
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          aria-label={ariaLabel}
          style={{ display: "none" }}
          {...props}
        />
        <ToggleSwitch
          $checked={!!checked}
          $variant={variant}
          $size={size}
          aria-hidden="true"
        >
          <ToggleHandle $checked={!!checked} $size={size} $variant={variant} />
        </ToggleSwitch>
        {showText && <ToggleLabel>{checked ? onText : offText}</ToggleLabel>}
      </ToggleContainer>
    );
  }
);

export default Toggle;

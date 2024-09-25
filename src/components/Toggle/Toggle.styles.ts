import styled, { css } from "styled-components";
import { ToggleSize, ToggleVariant } from "./Toggle";
import { getRGBA } from "../../utils";

export const ToggleContainer = styled.label<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  user-select: none;
`;

const getToggleSwitchSize = ($size: ToggleSize) => {
  switch ($size) {
    case "small":
      return css`
        width: 40px;
        height: 20px;
      `;
    case "medium":
      return css`
        width: 50px;
        height: 24px;
      `;
    case "large":
      return css`
        width: 60px;
        height: 28px;
      `;
  }
};

const getToggleSwitchVariant = ($variant: ToggleVariant, $checked: boolean) => {
  switch ($variant) {
    case "outline":
      return css`
        background-color: ${({ theme }) => getRGBA(theme.defaultColor, 0.1)};
        border: 1px solid
          ${({ theme }) =>
            $checked ? theme.defaultColor : theme.colors.GRAY_300};
      `;
    case "solid":
      return css`
        background-color: ${({ theme }) =>
          $checked ? theme.defaultColor : theme.colors.GRAY_300};
        border: 1px solid transparent;
      `;
  }
};

export const ToggleSwitch = styled.span<{
  $checked: boolean;
  $variant: ToggleVariant;
  $size: ToggleSize;
}>`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  ${({ $size }) => getToggleSwitchSize($size)};
  ${({ $variant, $checked }) => getToggleSwitchVariant($variant, $checked)};
  border-radius: ${({ theme }) => theme.borderRadius.xLarge};
  transition: ${({ theme }) => theme.transitions.default};
  margin-right: 8px;
`;

const getToggleHandleSize = ($size: ToggleSize) => {
  switch ($size) {
    case "small":
      return css`
        width: 12px;
        height: 12px;
      `;
    case "medium":
      return css`
        width: 16px;
        height: 16px;
      `;
    case "large":
      return css`
        width: 20px;
        height: 20px;
      `;
  }
};

const getToggleHandleOffset = ($size: ToggleSize, $checked: boolean) => {
  const offset = $size === "small" ? "4px" : $size === "medium" ? "4px" : "5px";
  const handleSize = $size === "small" ? 12 : $size === "medium" ? 16 : 20;
  if ($checked) {
    return `calc(100% - ${offset} - ${handleSize}px)`;
  } else {
    return offset;
  }
};

const getToggleHandleVariant = ($variant: ToggleVariant, $checked: boolean) => {
  switch ($variant) {
    case "outline":
      return css`
        background-color: ${({ theme }) =>
          $checked ? theme.defaultColor : theme.colors.GRAY_300};
      `;
    case "solid":
      return css`
        background-color: ${({ theme }) => theme.colors.WHITE};
      `;
  }
};

export const ToggleHandle = styled.span<{
  $checked: boolean;
  $size: ToggleSize;
  $variant: ToggleVariant;
}>`
  position: absolute;
  top: 50%;
  left: ${({ $checked, $size }) => getToggleHandleOffset($size, $checked)};
  transform: translateY(-50%);
  ${({ $size }) => getToggleHandleSize($size)};
  ${({ $variant, $checked }) => getToggleHandleVariant($variant, $checked)};
  border-radius: 50%;
  transition: ${({ theme }) => theme.transitions.default};
`;

export const ToggleLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.BLACK};
  user-select: none;
`;

import styled, { css } from "styled-components";

export const CheckboxContainer = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0); // 숨김
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{
  $checked?: boolean;
  $indeterminate?: boolean;
  disabled?: boolean;
}>`
  width: ${({ theme }) => theme.spacing.large};
  height: ${({ theme }) => theme.spacing.large};
  background: ${({ $checked, $indeterminate, theme }) =>
    $checked || $indeterminate ? theme.colors.BLUE_700 : theme.colors.WHITE};
  border: 1px solid
    ${({ $checked, $indeterminate, theme }) =>
      $checked || $indeterminate
        ? theme.colors.BLUE_700
        : theme.colors.GRAY_300};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: all 150ms;
  display: flex;
  align-items: center;
  justify-content: center;

  ${HiddenCheckbox}:focus + & {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.BLUE_100};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      border-color: ${({ theme }) => theme.colors.GRAY_300};
      background: ${({ theme }) => theme.colors.GRAY_100};
    `}
`;

export const Icon = styled.svg`
  fill: none;
  stroke: ${({ theme }) => theme.colors.WHITE};
  stroke-width: 2px;
`;

export const LabelText = styled.span<{ $disabled?: boolean }>`
  margin-left: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  user-select: none;
  cursor: pointer;

  ${({ $disabled }) =>
    $disabled &&
    css`
      color: ${({ theme }) => theme.colors.GRAY_500};
      cursor: not-allowed;
    `}
`;

export const HelperText = styled.span<{ $error?: boolean }>`
  display: block;
  color: ${({ $error, theme }) =>
    $error ? theme.colors.RED_500 : theme.colors.GRAY_600};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: ${({ theme }) => theme.spacing.xsmall};
  margin-left: ${({ theme }) => theme.spacing.xsmall};
`;

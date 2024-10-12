import styled, { css } from "styled-components";

export const CheckboxContainer = styled.label<{
  disabled?: boolean;
  $gap?: string;
}>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  gap: ${({ $gap, theme }) => $gap || theme.spacing.small};
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
    $checked || $indeterminate ? theme.defaultColor : theme.colors.white};
  border: 1px solid
    ${({ $checked, $indeterminate, theme }) =>
      $checked || $indeterminate ? theme.defaultColor : theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: all 150ms;
  display: flex;
  align-items: center;
  justify-content: center;

  ${HiddenCheckbox}:focus + & {
    outline: none;
    border-color: ${({ theme }) => theme.defaultColor};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      border-color: ${({ theme }) => theme.colors.gray[300]};
      background: ${({ theme }) => theme.colors.gray[100]};
    `}
`;

export const Icon = styled.svg`
  fill: none;
  stroke: ${({ theme }) => theme.colors.white};
  stroke-width: 2px;
`;

export const LabelText = styled.span<{ $disabled?: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  user-select: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};

  ${({ $disabled }) =>
    $disabled &&
    css`
      color: ${({ theme }) => theme.colors.gray[500]};
      cursor: not-allowed;
    `}
`;

export const HelperText = styled.span<{ $error?: boolean }>`
  display: block;
  color: ${({ $error, theme }) =>
    $error ? theme.colors.red[500] : theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: ${({ theme }) => theme.spacing.xsmall};
  margin-left: ${({ theme }) => theme.spacing.xsmall};
`;

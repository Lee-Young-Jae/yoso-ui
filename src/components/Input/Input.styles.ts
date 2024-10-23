import styled from "styled-components";

export const InputContainer = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  gap: 4px;
`;

export const Label = styled.label`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.black};
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.colors.red[500]};
  margin-left: ${({ theme }) => theme.spacing.xsmall};
`;

export const InputWrapper = styled.div<{
  $disabled?: boolean;
  $error?: boolean;
  $radius?: string;
}>`
  display: flex;
  align-items: center;
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.gray[100] : theme.colors.white};
  border: 1px solid
    ${({ theme, $error }) =>
      $error ? theme.colors.red[500] : theme.colors.gray[300]};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme, $radius }) =>
    $radius ? theme.borderRadius[$radius] : theme.borderRadius.medium};
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus-within {
    border-color: ${({ theme, $error }) =>
      $error ? theme.colors.red[500] : theme.defaultColor};
  }
`;

export const StyledInput = styled.input<{ $size?: string; $hasIcon?: boolean }>`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: ${({ theme, $size }) => {
    switch ($size) {
      case "small":
        return theme.fontSizes.small;
      case "large":
        return theme.fontSizes.large;
      default:
        return theme.fontSizes.medium;
    }
  }};
  padding: ${({ theme, $size, $hasIcon }) => {
    const basePadding = $hasIcon ? theme.spacing.small : theme.spacing.medium;
    switch ($size) {
      case "small":
        return `${theme.spacing.xsmall} ${basePadding}`;
      case "large":
        return `${theme.spacing.medium} ${basePadding}`;
      default:
        return `${theme.spacing.small} ${basePadding}`;
    }
  }};
  color: ${({ theme }) => theme.colors.black};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.gray[500]};

  svg {
    width: 1em;
    height: 1em;
  }
`;

export const HelperText = styled.span<{ $error?: boolean }>`
  margin-top: ${({ theme }) => theme.spacing.xsmall};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme, $error }) =>
    $error ? theme.colors.red[500] : theme.colors.gray[500]};
`;

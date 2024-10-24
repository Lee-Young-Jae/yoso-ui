import styled from "styled-components";
import { getRGBA } from "../../utils";

export const RadioContainer = styled.label<{
  $disabled: boolean;
}>`
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  width: fit-content;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1rem;
  font-family: inherit;
  vertical-align: middle;
  gap: ${({ theme }) => theme.spacing.small};

  display: inline-flex;
  align-items: center;

  /* 라벨 텍스트의 기준선을 조정 */
  & > span:last-child {
    line-height: 1;
    padding-top: 2px;
  }
`;

export const HiddenRadioInput = styled.input`
  opacity: 0;
  position: absolute;
  pointer-events: none;
`;

export const StyledRadio = styled.span<{
  $color?: string;
  $disabled: boolean;
}>`
  width: ${({ theme }) => theme.spacing.large};
  height: ${({ theme }) => theme.spacing.large};
  border: 1px solid ${({ theme, $color }) => $color || theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  ${HiddenRadioInput}:checked + & {
    background-color: ${({ theme, $color }) => $color || theme.defaultColor};
  }

  ${HiddenRadioInput}:focus + & {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => getRGBA(theme.defaultColor, 0.3)};
  }

  & > span {
    width: 50%;
    height: 50%;
    background-color: white;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.2s;
  }

  ${HiddenRadioInput}:checked + & > span {
    opacity: 1;
  }
`;

export const RadioLabel = styled.span<{
  $disabled: boolean;
}>`
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.gray[500] : "inherit"};
`;

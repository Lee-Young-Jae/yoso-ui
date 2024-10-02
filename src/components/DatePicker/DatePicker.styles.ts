import styled, { css } from "styled-components";
import { getRGBA } from "../../utils";

export const DatePickerContainer = styled.div`
  width: 100%;
  max-width: 320px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.WHITE};
  padding: ${({ theme }) => theme.spacing.small};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.large};
`;

export const MonthYear = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
`;

export const NavLeftButton = styled.button`
  background: none;
  border: none;

  &::before {
    content: "";
    border: solid ${({ theme }) => theme.colors.GRAY_700};
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(135deg);
  }

  cursor: pointer;
  color: ${({ theme }) => theme.colors.GRAY_700};

  &:hover {
    color: ${({ theme }) => theme.colors.BLACK};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.GRAY_300};
    cursor: not-allowed;
  }
`;

export const NavRightButton = styled.button`
  background: none;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  &::before {
    content: "";
    border: solid ${({ theme }) => theme.colors.GRAY_700};
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
  }

  cursor: pointer;
  color: ${({ theme }) => theme.colors.GRAY_700};

  &:hover {
    color: ${({ theme }) => theme.colors.BLACK};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.GRAY_300};
    cursor: not-allowed;
  }
`;

export const Weekdays = styled.div`
  display: flex;
`;

export const Weekday = styled.div`
  flex: 1;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.GRAY_600};
`;

export const DaysGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DayButton = styled.button<{
  $isSelected?: boolean;
  $isInRange?: boolean;
  $isToday?: boolean;
  $isStartDay?: boolean;
  $isEndDay?: boolean;
  $isStartOfRow?: boolean;
  $isEndOfRow?: boolean;
  $day?: number;
  disabled?: boolean;
}>`
  position: relative;
  width: calc(100% / 7);
  height: 40px;
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
  cursor: pointer;

  color: ${({ $isSelected, $isToday, theme }) =>
    $isSelected
      ? theme.colors.WHITE
      : $isToday
      ? theme.colors.BLUE_500
      : theme.colors.BLACK};

  ${({ $isSelected, $isInRange, $isStartDay, $isEndDay, theme }) =>
    $isStartDay || $isEndDay
      ? css`
          background-color: ${getRGBA(theme.defaultColor, 0.5)};
        `
      : ($isSelected || $isInRange) &&
        css`
          background-color: ${$isSelected
            ? theme.defaultColor
            : getRGBA(theme.defaultColor, 0.3)};
        `}

  ${({
    $isStartDay,
    $isEndDay,
    $isStartOfRow,
    $isEndOfRow,
    $isInRange,
    theme,
  }) =>
    ($isStartDay || $isEndDay || $isInRange) &&
    css`
      border-radius: ${() => {
        if ($isStartDay && $isEndDay) {
          return theme.borderRadius.medium;
        }

        return `
          ${
            $isStartDay || ($isStartOfRow && $isInRange)
              ? theme.borderRadius.medium
              : 0
          }
          ${
            $isEndDay || ($isEndOfRow && $isInRange)
              ? theme.borderRadius.medium
              : 0
          }
          ${
            $isEndDay || ($isEndOfRow && $isInRange)
              ? theme.borderRadius.medium
              : 0
          }
          ${
            $isStartDay || ($isStartOfRow && $isInRange)
              ? theme.borderRadius.medium
              : 0
          }
        `;
      }};
    `}

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      border-radius: ${({ theme }) => theme.borderRadius.medium};
    `}

  &:disabled {
    color: ${({ theme }) => theme.colors.GRAY_300};
    cursor: not-allowed;
  }
`;

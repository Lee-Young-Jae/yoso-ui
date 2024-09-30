import styled from "styled-components";
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

export const NavButton = styled.button`
  background: none;
  border: none;
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
  $isInHoveredRange?: boolean;
  $isToday?: boolean;
  $isHovered?: boolean;
  $isStartDay?: boolean;
  $isEndDay?: boolean;
  $day?: number;
}>`
  position: relative;
  width: calc(100% / 7);
  height: 40px;
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
  cursor: pointer;
  color: none;

  &::before {
    content: "${({ $day }) => $day || ""}";

    // 부모가 disabled일 때, 자식도 disabled로 만들기

    color: ${({ theme }) => theme.colors.BLACK};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 35px;
    top: calc(50% - 17.5px);
    left: 0;

    border-radius: ${({
      theme,
      $isStartDay,
      $isEndDay,
      $isSelected,
      $isHovered,
    }) =>
      $isSelected || $isHovered
        ? theme.borderRadius.medium
        : `${$isStartDay ? theme.borderRadius.medium : 0} ${
            $isEndDay ? theme.borderRadius.medium : 0
          } ${$isEndDay ? theme.borderRadius.medium : 0} ${
            $isStartDay ? theme.borderRadius.medium : 0
          }`};

    background: ${({
      $isSelected,
      $isInRange,
      $isInHoveredRange,
      $isHovered,
      theme,
    }) =>
      $isSelected || $isHovered
        ? getRGBA(theme.defaultColor, 0.3)
        : $isInRange
        ? getRGBA(theme.defaultColor, 0.2)
        : $isInHoveredRange
        ? getRGBA(theme.defaultColor, 0.1)
        : "transparent"};
  }

  &:disabled {
    &::before {
      color: ${({ theme }) => theme.colors.GRAY_300};
    }
    cursor: not-allowed;
  }
`;

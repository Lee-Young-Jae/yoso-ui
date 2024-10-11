import styled from "styled-components";
import { getRGBA } from "../../utils";

export const AccordionContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

export const AccordionItemContainer = styled.div`
  &:last-child {
    border-bottom: none;
  }
`;

export const AccordionHeaderButton = styled.button<{ $expanded?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme, $expanded }) =>
    $expanded ? theme.colors.BLUE_500 : theme.colors.gray[800]};
  &:hover {
    background-color: ${({ theme }) => getRGBA(theme.defaultColor, 0.1)};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => getRGBA(theme.defaultColor, 0.1)};
  }
`;

export const AccordionContentPanel = styled.div<{
  $expanded?: boolean;
  $height: number;
}>`
  overflow: hidden;
  max-height: ${({ $height }) => $height}px;
  padding: ${({ theme, $expanded }) =>
    $expanded ? theme.spacing.large : `0 ${theme.spacing.large}`};
  transition: max-height 0.3s ease, padding 0.3s ease, opacity 0.3s ease;
  opacity: ${({ $expanded }) => ($expanded ? 1 : 0)};
  color: ${({ theme }) => theme.colors.gray[800]};
`;

export const Icon = styled.svg<{ $expanded?: boolean }>`
  transition: transform 0.3s;
  transform: ${({ $expanded }) =>
    $expanded ? "rotate(180deg)" : "rotate(0deg)"};
  width: ${({ theme }) => theme.spacing.xlarge};
  height: ${({ theme }) => theme.spacing.xlarge};
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: ${({ theme }) => theme.spacing.large};
    height: ${({ theme }) => theme.spacing.large};
  }
`;

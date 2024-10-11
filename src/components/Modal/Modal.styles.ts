import styled, { keyframes, css } from "styled-components";

const slideUp = keyframes`
  from { transform: translateY(50px); }
  to { transform: translateY(0); }
`;

const slideDown = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(50px); }
`;

export const StyledModal = styled.div<{
  $opened: boolean;
  $isAnimating: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({ theme }) => theme.zIndex.modal};
  opacity: 0;
  visibility: hidden;

  ${({ $opened, $isAnimating }) =>
    $opened && !$isAnimating
      ? css`
          opacity: 1;
          visibility: visible;
          transition: opacity 0.3s;
        `
      : css`
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s, visibility 0s 0.3s;
        `}
`;

export const StyledModalInner = styled.div<{
  $opened: boolean;
  $isAnimating: boolean;
}>`
  display: flex;
  flex-direction: column;
  position: absolute;
  box-sizing: border-box;
  background-color: white;
  max-height: calc(100vh - 80px);
  max-width: calc(100vw - 80px);
  min-width: 250px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  z-index: ${({ theme }) => theme.zIndex.modal + 1};

  ${({ $opened, $isAnimating }) =>
    $opened && !$isAnimating
      ? css`
          animation: ${slideUp} 0.3s;
        `
      : css`
          animation: ${slideDown} 0.3s;
        `}

  box-shadow: ${({ theme }) => theme.shadows.medium};
  overflow: auto;
`;

export const StyledModalHideButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.medium};
  right: ${({ theme }) => theme.spacing.medium};
  background: none;
  border: none;
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 1px;
    height: 1rem;
    border-radius: 1px;
    background-color: ${({ theme }) => theme.colors.black};
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const StyledModalHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

export const StyledModalTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.5;
`;

export const StyledModalContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const StyledModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.xlarge};
`;

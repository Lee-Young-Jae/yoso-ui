import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

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
  transition: opacity 0.3s, visibility 0s 0.3s;

  ${({ $opened, $isAnimating }) =>
    $opened && !$isAnimating
      ? css`
          opacity: 1;
          visibility: visible;
          transition: opacity 0.3s;
          animation: ${fadeIn} 0.3s;
        `
      : css`
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s, visibility 0s 0.3s;
          animation: ${fadeOut} 0.3s;
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
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

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
    background-color: ${({ theme }) => theme.defaultColor};
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const StyledModalHeader = styled.div`
  p {
    padding: 0;
    margin: 0;
  }
`;

export const StyledModalContent = styled.div``;

export const StyledModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

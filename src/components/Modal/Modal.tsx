import React, { HTMLAttributes, ReactNode, useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";

import { Portal } from "../Portal/Portal";
import { useScrollLock } from "./useScrollLock";

interface ModalProps {
  opened: boolean;
  hideOnClickOutside?: boolean;
  showHideButton?: boolean;
  hide: () => void;
  children: ReactNode;
  isAnimating?: boolean;
}

const Modal = ({
  opened,
  hideOnClickOutside = true,
  showHideButton = false,
  isAnimating = false,
  hide,
  children,
}: ModalProps) => {
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();
  const modalInnerRef = useRef<HTMLDivElement>(null);
  const modalRoot = useRef<HTMLElement | null>(null);

  useScrollLock(opened);

  const handleHide = () => {
    hide();
  };

  useEffect(() => {
    modalRoot.current = document.getElementById("modalRoot");
  }, []);

  return opened ? (
    <Portal container={modalRoot.current as HTMLElement}>
      <StyledModal
        onClick={hideOnClickOutside ? handleHide : undefined}
        $opened={opened}
        $isAnimating={isAnimating}
      >
        <StyledModalInner
          onClick={stopPropagation}
          $opened={opened}
          $isAnimating={isAnimating}
          ref={modalInnerRef}
        >
          {showHideButton && (
            <StyledModalHideButton
              onClick={handleHide}
              aria-label="모달 닫기"
            />
          )}
          {children}
        </StyledModalInner>
      </StyledModal>
    </Portal>
  ) : null;
};

interface ModalHeaderProps {
  children?: ReactNode;
  title?: string | ReactNode;
  hide?: () => void;
}

const ModalHeader = ({ children, title }: ModalHeaderProps) => {
  return (
    <StyledModalHeader>
      <p>{title}</p>
      {children}
    </StyledModalHeader>
  );
};

interface ModalContentProps {
  children: ReactNode;
}

const ModalContent = ({ children }: ModalContentProps) => {
  return <StyledModalContent>{children}</StyledModalContent>;
};

interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ModalFooter = ({ children, ...props }: ModalFooterProps) => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const buttons = footerRef.current?.querySelectorAll("button");

    if (buttons && buttons.length > 0) {
      buttons[0].focus();
    }

    return () => {
      buttons?.forEach((button) => {
        button.removeEventListener("keydown", (e) => {
          if (e.key === "Tab" && e.shiftKey) {
            e.preventDefault();
            buttons[buttons.length - 1].focus();
          }
        });
      });
    };
  }, []);

  return (
    <StyledModalFooter ref={footerRef} {...props}>
      {children}
    </StyledModalFooter>
  );
};

const ModalAnimation = {
  slideUp: keyframes`
    from {
      transform: translateY(5px);
    }
    to {
      transform: translateY(0);
    }
  `,

  slideDown: keyframes`
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(5px);
    }
  `,

  fadeIn: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,

  fadeOut: keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `,
};

const StyledModal = styled.div<{ $opened: boolean; $isAnimating: boolean }>`
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
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0s 0.3s;

  ${({ $opened, $isAnimating }) =>
    $opened && !$isAnimating
      ? css`
          opacity: 1;
          visibility: visible;
          transition: opacity 0.3s;
          animation: ${ModalAnimation.fadeIn} 0.3s;
        `
      : css`
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s, visibility 0s 0.3s;
          animation: ${ModalAnimation.fadeOut} 0.3s;
        `}
`;

const StyledModalInner = styled.div<{
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
          animation: ${ModalAnimation.slideUp} 0.3s;
        `
      : css`
          animation: ${ModalAnimation.slideDown} 0.3s;
        `}

  box-shadow: ${({ theme }) => theme.shadows.medium};
  overflow: auto;
`;

const StyledModalHideButton = styled.button`
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

const StyledModalHeader = styled.div`
  p {
    padding: 0;
    margin: 0;
  }
`;

const StyledModalContent = styled.div``;

const StyledModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;

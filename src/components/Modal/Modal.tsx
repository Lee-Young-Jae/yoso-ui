"use client";

import React, {
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useId,
} from "react";

import { Portal } from "../Portal/Portal";
import { useScrollLock } from "./useScrollLock";
import {
  StyledModal,
  StyledModalContent,
  StyledModalFooter,
  StyledModalHeader,
  StyledModalHideButton,
  StyledModalInner,
  StyledModalTitle,
} from "./Modal.styles";

export interface ModalProps {
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
  const modalId = `modal-${useId()}`;
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();
  const modalInnerRef = useRef<HTMLDivElement>(null);
  const modalRoot = useRef<HTMLElement | null>(null);

  useScrollLock({
    isLocked: opened,
  });

  const handleHide = () => {
    hide();
  };

  useEffect(() => {
    modalRoot.current = document.getElementById("modalRoot");
  }, []);

  return opened ? (
    <Portal container={modalRoot.current as HTMLElement}>
      <StyledModal
        id={modalId}
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
      <StyledModalTitle>{title}</StyledModalTitle>
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

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;

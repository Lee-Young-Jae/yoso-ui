"use client";

import { useEffect } from "react";
import { Toast as ToastType } from "./Toast.types";
import {
  ProgressBar,
  StyledToastInner,
  StyledToastWrapper,
} from "./Toast.styles";

interface ToastProps {
  toast: ToastType;
  onClose: () => void;
}

const Toast = ({ toast, onClose }: ToastProps) => {
  // TODO: 마우스 올리면 타이머 reset
  // TODO: 마우스 내리면 타이머 다시 시작

  // const handleAnimationEnd = (e: AnimationEvent) => {
  //   if (e.animationName === "progress") {
  //     onClose();
  //   }
  // };

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, toast.duration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StyledToastWrapper
        role="alert"
        aria-live="assertive" // assertive: 중요한 메시지, polite: 일반적인 메시지
        aria-atomic="true" // true: 새로운 메시지만 읽음, false: 모든 메시지 읽음
        $duration={toast.duration}
        tabIndex={0}
      >
        <StyledToastInner $type={toast.type}>
          <div>
            <strong>{toast.message.title}</strong>
            <p>{toast.message.content}</p>
          </div>
        </StyledToastInner>
        <ProgressBar
          $duration={toast.duration}
          $type={toast.type}
          // onAnimationEnd={handleAnimationEnd}
        />
      </StyledToastWrapper>
    </>
  );
};

export default Toast;

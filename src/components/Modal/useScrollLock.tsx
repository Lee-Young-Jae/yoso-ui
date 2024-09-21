import { useCallback, useEffect } from "react";

export const useScrollLock = (isLocked: boolean) => {
  const getScrollWidth = useCallback(() => {
    return window.innerWidth - document.documentElement.clientWidth;
  }, []);

  const preventTouchMove = useCallback((e: TouchEvent) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    // TODO: 중첩 모달이라면 어떻게 처리할지 고민해보기
    const modals = document.getElementById("modalRoot")!.children;
    if (isLocked && modals.length > 0) {
      const scrollWidth = getScrollWidth();
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollWidth}px`;
      document.addEventListener("touchmove", preventTouchMove, {
        passive: false,
      });
    }

    return () => {
      if (modals.length > 1) return;
      document.body.style.overflow = "initial";
      document.body.style.paddingRight = "";
      document.removeEventListener("touchmove", preventTouchMove);
    };
  }, [isLocked, getScrollWidth, preventTouchMove]);
};

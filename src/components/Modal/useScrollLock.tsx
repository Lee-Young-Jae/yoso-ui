import { useCallback, useEffect } from "react";

interface ScrollLockProps {
  isLocked: boolean;
}

export const useScrollLock = ({ isLocked }: ScrollLockProps) => {
  const getScrollWidth = useCallback(() => {
    return window.innerWidth - document.documentElement.clientWidth;
  }, []);

  const preventTouchMove = useCallback((e: TouchEvent) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
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
      const modals = document.getElementById("modalRoot")!.children;

      if (modals.length > 0) return;

      document.body.style.overflow = "initial";
      document.body.style.paddingRight = "";
      document.removeEventListener("touchmove", preventTouchMove);
    };
  }, [isLocked, getScrollWidth, preventTouchMove]);
};

import { useCallback, useEffect } from "react";

export const useScrollLock = (isLocked: boolean) => {
  const getScrollWidth = useCallback(() => {
    return window.innerWidth - document.documentElement.clientWidth;
  }, []);

  const preventTouchMove = useCallback((e: TouchEvent) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    if (isLocked) {
      const scrollWidth = getScrollWidth();
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollWidth}px`;
      document.addEventListener("touchmove", preventTouchMove, {
        passive: false,
      });
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.removeEventListener("touchmove", preventTouchMove);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.removeEventListener("touchmove", preventTouchMove);
    };
  }, [isLocked, getScrollWidth, preventTouchMove]);
};

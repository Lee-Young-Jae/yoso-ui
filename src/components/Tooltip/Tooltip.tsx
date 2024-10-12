import React, {
  ReactNode,
  useState,
  useRef,
  useEffect,
  forwardRef,
  useCallback,
  useLayoutEffect,
  useId,
  MutableRefObject,
} from "react";
import styled from "styled-components";

import { Portal } from "../Portal/Portal";

export interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  trigger?: "hover" | "click" | "focus";
  delay?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
}

const TooltipContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const TooltipContent = styled.div<{
  $visible: boolean;
}>`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.tooltip};
  color: ${({ theme }) => theme.defaultColor};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: "opacity 0.2s ease-in-out";
`;

const TooltipTail = styled.div<{ $placement: Placement }>`
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: inherit;
  transform: rotate(45deg);

  ${({ $placement }) => {
    switch ($placement) {
      case "top":
        return `
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.06);
        `;
      case "bottom":
        return `
          top: -6px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.06);
        `;
      case "left":
        return `
          right: -6px;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.06);
        `;
      case "right":
        return `
          left: -6px;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.06);
        `;
      default:
        return "";
    }
  }}
`;

type Placement = "top" | "bottom" | "left" | "right";

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      content,
      placement = "top",
      trigger = "hover",
      delay = 0,
      disabled = false,
      className,
      style,
      contentClassName,
      contentStyle,
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false);
    const [isRendered, setIsRendered] = useState(false);
    const [positionStyles, setPositionStyles] = useState<React.CSSProperties>(
      {}
    );
    const [actualPlacement, setActualPlacement] =
      useState<Placement>(placement);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const triggerRef = useRef<HTMLDivElement | null>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    const tooltipId = `tooltip-${useId()}`;

    // 툴팁 보이기
    const showTooltip = useCallback(() => {
      if (disabled) return;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsRendered(true);
      timeoutRef.current = setTimeout(() => setVisible(true), delay);
    }, [delay, disabled]);

    // 툴팁 숨기기
    const hideTooltip = useCallback(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setVisible(false);
      // 애니메이션 시간 후에 렌더링 중지
      // TODO: animationEnd 이벤트로 대체 생각해보기
      setTimeout(() => {
        setIsRendered(false);
      }, 200);
    }, []);

    const handleClick = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation();
        if (visible) {
          hideTooltip();
        } else {
          showTooltip();
        }
      },
      [visible, showTooltip, hideTooltip]
    );

    // 위치 계산 및 실제 배치 결정
    const calculatePosition = useCallback(() => {
      if (!triggerRef.current || !tooltipRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const offset = 8; // 간격
      const tailSize = 6; // 꼬리 크기

      let newPlacement = placement;
      let top = 0;
      let left = 0;

      // 키 매핑
      const positions: { [key in Placement]: () => void } = {
        top: () => {
          top = triggerRect.top - tooltipRect.height - offset - tailSize;
          left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        },
        bottom: () => {
          top = triggerRect.bottom + offset + tailSize;
          left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        },
        left: () => {
          top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
          left = triggerRect.left - tooltipRect.width - offset - tailSize;
        },
        right: () => {
          top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
          left = triggerRect.right + offset + tailSize;
        },
      };

      // 초기 위치 적용 top, left 값 설정
      positions[newPlacement]();

      // 뷰포트 밖으로 벗어나는지 확인하고 위치 조정
      const isOutOfViewport = () => {
        return (
          top < 0 ||
          top + tooltipRect.height > viewportHeight ||
          left < 0 ||
          left + tooltipRect.width > viewportWidth
        );
      };

      if (isOutOfViewport()) {
        // 기존 위치를 제외한 대체 위치 찾기
        const alternatives: Placement[] = [
          "top",
          "bottom",
          "left",
          "right",
        ].filter((p) => p !== placement) as Placement[];

        // 대체 위치 중에서 가능한 위치 찾기
        for (const altPlacement of alternatives) {
          positions[altPlacement]();
          if (!isOutOfViewport()) {
            newPlacement = altPlacement;
            break;
          }
        }
      }

      // 위치 스타일 설정
      setPositionStyles({
        top: `${top + window.scrollY}px`,
        left: `${left + window.scrollX}px`,
        position: "absolute",
      });

      // 실제 배치 업데이트
      setActualPlacement(newPlacement);
    }, [placement]);

    // 위치 및 배치 업데이트
    useLayoutEffect(() => {
      if (visible && triggerRef.current && tooltipRef.current) {
        calculatePosition();
      }
    }, [visible, calculatePosition]);

    // 타이머 cleanup
    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    // Esc 키로 툴팁 닫기
    useEffect(() => {
      if (visible) {
        const handleKeyDown = (event: KeyboardEvent) => {
          if (event.key === "Escape") {
            hideTooltip();
          }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
      }
    }, [visible, hideTooltip]);

    // trigger가 "click" 일 때, 바깥 클릭으로 툴팁을 닫는 기능
    // TODO: useClickAway 훅으로 대체
    // TODO: 모바일 터치 이벤트 지원
    useEffect(() => {
      if (visible && trigger === "click") {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            triggerRef.current &&
            !triggerRef.current.contains(event.target as Node)
          ) {
            hideTooltip();
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }
    }, [visible, trigger, hideTooltip]);

    // 이벤트 핸들러 매핑
    const eventHandlers = (() => {
      switch (trigger) {
        case "hover":
          return {
            onMouseEnter: showTooltip,
            onMouseLeave: hideTooltip,
          };
        case "click":
          return {
            onClick: handleClick,
          };
        case "focus":
          return {
            onFocus: showTooltip,
            onBlur: hideTooltip,
          };
        default:
          return {};
      }
    })();

    const refCallback = (node: HTMLDivElement | null) => {
      triggerRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    return (
      <TooltipContainer
        ref={refCallback}
        className={className}
        style={style}
        aria-describedby={visible ? tooltipId : undefined}
        {...eventHandlers}
      >
        {children}
        {isRendered && (
          <Portal container={triggerRef.current?.ownerDocument.body}>
            <TooltipContent
              id={tooltipId}
              ref={tooltipRef}
              role="tooltip"
              aria-hidden={!visible}
              style={{ ...positionStyles, ...contentStyle }}
              $visible={visible}
              className={contentClassName}
            >
              {content}
              <TooltipTail $placement={actualPlacement} />
            </TooltipContent>
          </Portal>
        )}
      </TooltipContainer>
    );
  }
);

Tooltip.displayName = "Tooltip";

export default Tooltip;

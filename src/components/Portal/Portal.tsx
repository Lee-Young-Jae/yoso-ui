import React, { useEffect, useId } from "react";
import { createPortal } from "react-dom";

import YosoThemeProvider from "../../providers/YosoThemeProvider";

export interface PortalProps {
  children: React.ReactNode;
  container?: HTMLElement;
  idPrefix?: string;
  onPortalCreated?: (portal: HTMLDivElement) => void;
}

export const Portal = ({
  children,
  container,
  idPrefix = "",
  onPortalCreated,
}: PortalProps) => {
  const uniqueId = useId();
  const portalId = `${idPrefix}-${uniqueId}`;

  useEffect(() => {
    const portal = document.createElement("div");
    portal.setAttribute("id", portalId);
    document.body.appendChild(portal);

    if (onPortalCreated) {
      onPortalCreated(portal);
    }

    return () => {
      document.body.removeChild(portal);
    };
  }, [portalId, onPortalCreated]);

  return container
    ? createPortal(
        <YosoThemeProvider>{children}</YosoThemeProvider>,
        document.getElementById(portalId) as HTMLDivElement
      )
    : null;
};

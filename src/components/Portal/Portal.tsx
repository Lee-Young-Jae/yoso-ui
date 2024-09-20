import React from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
  children: React.ReactNode;
  container?: HTMLElement;
}

export const Portal = ({ children, container }: PortalProps) => {
  return createPortal(children, container || document.body);
};

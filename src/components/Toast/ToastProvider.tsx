import React, { createContext, useState, useCallback } from "react";
import { ToastContextType, Toast, ToastType } from "./Toast.types";
import ToastContainer from "./ToastContainer";

export const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    (
      message: {
        title: string;
        content: string;
      },
      type: ToastType = "info",
      duration: number = 3000
    ) => {
      const id = Date.now().toString();
      setToasts((prevToasts) => [
        ...prevToasts,
        { id, message, type, duration },
      ]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

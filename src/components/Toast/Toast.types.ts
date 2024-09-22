export type ToastType = "success" | "error" | "warning" | "info";

export interface Toast {
  id: string;
  type: ToastType;
  message: {
    title: string;
    content: string;
  };
  duration: number;
}

export interface ToastContextType {
  addToast: (
    message: {
      title: string;
      content: string;
    },
    type?: ToastType,
    duration?: number
  ) => void;
  removeToast: (id: string) => void;
}

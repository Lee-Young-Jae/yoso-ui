import styled from "styled-components";
import Toast from "./Toast";
import { Toast as ToastType } from "./Toast.types";
import { Portal } from "../Portal/Portal";

interface ToastContainerProps {
  toasts: ToastType[];
  removeToast: (id: string) => void;
}

const ToastContainer = ({ toasts, removeToast }: ToastContainerProps) => {
  return (
    <Portal container={document.getElementById("toastRoot") as HTMLElement}>
      <StyledContainer>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            toast={toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </StyledContainer>
    </Portal>
  );
};

const StyledContainer = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: ${({ theme }) => theme.zIndex.toast};
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 4px;
    transition: transform 0.3s ease-in-out;
  }
`;

export default ToastContainer;

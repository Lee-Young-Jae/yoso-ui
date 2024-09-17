import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const StyledButton = styled.button<{ variant: "primary" | "secondary" }>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.medium};
  background-color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  color: white;
`;

const Button = ({ children, onClick, variant = "primary" }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    error: string;
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
  };
}

const defaultTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    error: "#dc3545",
  },
  fontSizes: {
    small: "0.8rem",
    medium: "1rem",
    large: "1.2rem",
  },
};

export default defaultTheme;

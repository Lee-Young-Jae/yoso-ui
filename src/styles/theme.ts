type ColorShades = Partial<{
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}>;

export interface Theme {
  defaultColor: string;
  colors: {
    primary: string;
    secondary: string;
    success: string;
    error: string;
    warning: string;
    info: string;
    red: ColorShades;
    blue: ColorShades;
    green: ColorShades;
    gray: ColorShades;
    black: string;
    white: string;
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
  };
  fontWeights: {
    regular: number;
    bold: number;
  };
  spacing: {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };

  borderRadius: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    round: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  transitions: {
    default: string;
    fast: string;
    slow: string;
  };

  zIndex: {
    modal: number;
    toast: number;
    tooltip: number;
  };
}

export const defaultTheme: Theme = {
  defaultColor: "#22cb88",
  colors: {
    primary: "#2196F3", // blue[500]
    secondary: "#757575", // gray[600]
    success: "#4CAF50", // green[500]
    error: "#F44336", // red[500]
    warning: "#FFC107",
    info: "#00BCD4",
    red: {
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#cb2222",
      900: "#b71c1c",
    },
    blue: {
      50: "#E3F2FD",
      100: "#BBDEFB",
      200: "#90CAF9",
      300: "#64B5F6",
      400: "#42A5F5",
      500: "#2196F3",
      600: "#1E88E5",
      700: "#1976D2",
      800: "#1565C0",
      900: "#0D47A1",
    },
    green: {
      50: "#E8F5E9",
      100: "#C8E6C9",
      200: "#A5D6A7",
      300: "#81C784",
      400: "#66BB6A",
      500: "#4CAF50",
      600: "#43A047",
      700: "#388E3C",
      800: "#2E7D32",
      900: "#1B5E20",
    },
    gray: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },

    black: "#212121",
    white: "#FFFFFF",
  },
  fontSizes: {
    small: "0.8rem",
    medium: "1rem",
    large: "1.125rem",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "12px",
    xlarge: "16px",
    round: "50%",
  },
  fontWeights: {
    regular: 400,
    bold: 600,
  },
  spacing: {
    xsmall: "2px",
    small: "4px",
    medium: "8px",
    large: "16px",
    xlarge: "24px",
  },
  shadows: {
    small: "0 1px 3px rgba(0, 0, 0, 0.12)",
    medium: "0 4px 6px rgba(0, 0, 0, 0.16)",
    large: "0 10px 20px rgba(0, 0, 0, 0.19)",
  },
  transitions: {
    default: "all 0.3s ease",
    fast: "all 0.1s ease",
    slow: "all 0.5s ease",
  },

  zIndex: {
    modal: 1000,
    toast: 1100,
    tooltip: 1200,
  },
};

export const darkTheme: Theme = {
  ...defaultTheme,
  defaultColor: "#0CCD6D",
  colors: {
    ...defaultTheme.colors,
    white: "#212121",
    black: "#FFFFFF",

    blue: {
      50: "#0D47A1",
      100: "#1565C0",
      200: "#1976D2",
      300: "#1E88E5",
      400: "#2196F3",
      500: "#42A5F5",
      600: "#64B5F6",
      700: "#90CAF9",
      800: "#BBDEFB",
      900: "#E3F2FD",
    },
    green: {
      50: "#1B5E20",
      100: "#2E7D32",
      200: "#388E3C",
      300: "#43A047",
      400: "#4CAF50",
      500: "#66BB6A",
      600: "#81C784",
      700: "#A5D6A7",
      800: "#C8E6C9",
      900: "#E8F5E9",
    },
    gray: {
      50: "#212121",
      100: "#424242",
      200: "#616161",
      300: "#757575",
      400: "#9E9E9E",
      500: "#BDBDBD",
      600: "#E0E0E0",
      700: "#EEEEEE",
      800: "#F5F5F5",
      900: "#FAFAFA",
    },
  },
  shadows: {
    small: "0 1px 3px rgba(0, 0, 0, 0.12)",
    medium: "0 4px 6px rgba(0, 0, 0, 0.16)",
    large: "0 10px 20px rgba(0, 0, 0, 0.19)",
  },
};

export default defaultTheme;

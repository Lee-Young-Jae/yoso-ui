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
    red: ColorShades;
    blue: ColorShades;
    green: ColorShades;
    gray: ColorShades;
    black: string;
    white: string;
    // RED_300: string;
    // RED_500: string;
    // RED_700: string;
    // RED_900: string;
    // GREEN_300: string;
    // GREEN_500: string;
    // GREEN_700: string;
    // GREEN_900: string;
    // BLUE_100: string;
    // BLUE_300: string;
    // BLUE_500: string;
    // BLUE_700: string;
    // BLUE_900: string;
    // GRAY_50: string;
    // GRAY_100: string;
    // GRAY_200: string;
    // GRAY_300: string;
    // GRAY_500: string;
    // GRAY_600: string;
    // GRAY_800: string;
    // GRAY_900: string;
    // BLACK: string;
    // WHITE: string;
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
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };

  borderRadius?: {
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

const defaultTheme: Theme = {
  defaultColor: "#7C93C3",
  colors: {
    red: {
      50: "#FFEBEE",
      100: "#FFCDD2",
      200: "#EF9A9A",
      300: "#E57373",
      400: "#EF5350",
      500: "#F44336",
      600: "#E53935",
      700: "#D32F2F",
      800: "#C62828",
      900: "#B71C1C",
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
    // RED_300: "#FFCDD2",
    // RED_500: "#F44336",
    // RED_700: "#D32F2F",
    // RED_900: "#B71C1C",
    // GREEN_300: "#A5D6A7",
    // GREEN_500: "#4CAF50",
    // GREEN_700: "#388E3C",
    // GREEN_900: "#1B5E20",
    // BLUE_100: "#BBDEFB",
    // BLUE_300: "#81D4FA",
    // BLUE_500: "#2196F3",
    // BLUE_700: "#1976D2",
    // BLUE_900: "#0D47A1",
    // GRAY_50: "#FAFAFA",
    // GRAY_100: "#F5F5F5",
    // GRAY_200: "#EEEEEE",
    // GRAY_300: "#E0E0E0",
    // GRAY_500: "#9E9E9E",
    // GRAY_600: "#757575",
    // GRAY_800: "#424242",
    // GRAY_900: "#212121",
    // BLACK: "#212121",
    // WHITE: "#FFFFFF",
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

export default defaultTheme;

export interface Theme {
  defaultColor: string;
  colors: {
    RED_300: string;
    RED_500: string;
    RED_700: string;
    RED_900: string;
    GREEN_300: string;
    GREEN_500: string;
    GREEN_700: string;
    GREEN_900: string;
    BLUE_100: string;
    BLUE_300: string;
    BLUE_500: string;
    BLUE_700: string;
    BLUE_900: string;
    GRAY_50: string;
    GRAY_100: string;
    GRAY_200: string;
    GRAY_300: string;
    GRAY_500: string;
    GRAY_600: string;
    GRAY_900: string;
    BLACK: string;
    WHITE: string;
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
  };
  fontWeights: {
    regular: 400;
    bold: 700;
  };
  spacing: {
    small: "4px";
    medium: "8px";
    large: "16px";
    xLarge: "24px";
  };

  borderRadius?: {
    small: string;
    medium: string;
    large: string;
  };
  shadows?: {
    small: string;
    medium: string;
    large: string;
  };
  transitions: {
    default: "all 0.3s ease";
    fast: "all 0.1s ease";
    slow: "all 0.5s ease";
  };

  zIndex?: {
    modal: number;
  };
}

const defaultTheme: Theme = {
  defaultColor: "#7C93C3",
  colors: {
    RED_300: "#FFCDD2",
    RED_500: "#F44336",
    RED_700: "#D32F2F",
    RED_900: "#B71C1C",
    GREEN_300: "#A5D6A7",
    GREEN_500: "#4CAF50",
    GREEN_700: "#388E3C",
    GREEN_900: "#1B5E20",
    BLUE_100: "#BBDEFB",
    BLUE_300: "#81D4FA",
    BLUE_500: "#2196F3",
    BLUE_700: "#1976D2",
    BLUE_900: "#0D47A1",
    GRAY_50: "#FAFAFA",
    GRAY_100: "#F5F5F5",
    GRAY_200: "#EEEEEE",
    GRAY_300: "#E0E0E0",
    GRAY_500: "#9E9E9E",
    GRAY_600: "#757575",
    GRAY_900: "#212121",
    BLACK: "#212121",
    WHITE: "#FFFFFF",
  },
  fontSizes: {
    small: "0.8rem",
    medium: "1rem",
    large: "1.2rem",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
  fontWeights: {
    regular: 400,
    bold: 700,
  },
  spacing: {
    small: "4px",
    medium: "8px",
    large: "16px",
    xLarge: "24px",
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
  },
};

export default defaultTheme;

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import defaultTheme, { Theme } from "../styles/theme";
import { useMemo } from "react";
import { ToastProvider } from "../components/Toast/ToastProvider";

interface YosoThemeProviderProps {
  theme?: Partial<Theme>;
  children: React.ReactNode;
}

const YosoThemeProvider = ({ theme, children }: YosoThemeProviderProps) => {
  const mergedTheme = useMemo(() => {
    return {
      ...defaultTheme,
      ...theme,
      colors: {
        ...defaultTheme.colors,
        ...(theme?.colors || {}),
      },
      fontSizes: {
        ...defaultTheme.fontSizes,
        ...(theme?.fontSizes || {}),
      },
    };
  }, [theme]);

  return (
    <StyledThemeProvider theme={mergedTheme}>
      <ToastProvider>
        {children}
        <div id="modalRoot" />
        <div id="toastRoot" />
        <div id="tooltipRoot" />
      </ToastProvider>
    </StyledThemeProvider>
  );
};

export default YosoThemeProvider;

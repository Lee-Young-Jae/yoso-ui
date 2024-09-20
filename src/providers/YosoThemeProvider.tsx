import { ThemeProvider as StyledThemeProvider } from "styled-components";
import defaultTheme, { Theme } from "../styles/theme";
import { useMemo } from "react";

interface YosoThemeProviderProps {
  theme?: Partial<Theme>;
  children: React.ReactNode;
}

const YosoThemeProvider = ({
  theme = {},
  children,
}: YosoThemeProviderProps) => {
  const mergedTheme = useMemo(() => {
    return {
      ...defaultTheme,
      ...theme,
      colors: {
        ...defaultTheme.colors,
        ...theme.colors,
      },
      fontSizes: {
        ...defaultTheme.fontSizes,
        ...theme.fontSizes,
      },
    };
  }, [theme]);

  return (
    <StyledThemeProvider theme={mergedTheme}>
      {children}
      <div id="modalRoot" />
    </StyledThemeProvider>
  );
};

export default YosoThemeProvider;

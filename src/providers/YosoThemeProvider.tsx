"use client";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme, darkTheme, defaultTheme } from "../styles/theme";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ToastProvider } from "../components/Toast/ToastProvider";

interface ThemeContextProps {
  themeMode: "light" | "dark";
  toggleThemeMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  themeMode: "light",
  toggleThemeMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface YosoThemeProviderProps {
  theme?: Partial<Theme>;
  children: React.ReactNode;
  useSystemColorMode?: boolean;
  initialThemeMode?: "light" | "dark";
}

const YosoThemeProvider = ({
  theme,
  children,
  useSystemColorMode = false,
  initialThemeMode = "light",
}: YosoThemeProviderProps) => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">(
    initialThemeMode
  );

  // 시스템 설정에 따라 다크 모드 적용
  useEffect(() => {
    if (
      useSystemColorMode &&
      typeof window !== "undefined" &&
      window.matchMedia
    ) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleChange = (e: MediaQueryListEvent) => {
        setThemeMode(e.matches ? "dark" : "light");
      };

      // 초기 모드 설정
      setThemeMode(mediaQuery.matches ? "dark" : "light");

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handleChange);
      }

      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener("change", handleChange);
        }
      };
    }
  }, [useSystemColorMode]);

  // 현재 테마 모드에 따라 테마 선택
  const baseTheme = themeMode === "dark" ? darkTheme : defaultTheme;

  const mergedTheme = useMemo(() => {
    return {
      ...baseTheme,
      ...theme,
      colors: {
        ...baseTheme.colors,
        ...(theme?.colors || {}),
      },
      fontSizes: {
        ...baseTheme.fontSizes,
        ...(theme?.fontSizes || {}),
      },
      // 필요한 다른 속성들도 병합
    };
  }, [baseTheme, theme]);

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
      <StyledThemeProvider theme={mergedTheme}>
        <ToastProvider>
          {children}
          <div id="modalRoot" />
          <div id="toastRoot" />
        </ToastProvider>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default YosoThemeProvider;

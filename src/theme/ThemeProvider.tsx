import { FC, ReactNode, createContext, useState } from "react";
import { LocalStorageConstant } from "../constant/LocalStorageConstant";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import {themeCreator} from "./base";

interface BaseThemeProps {
  children?: ReactNode;
}

const ThemeContext = createContext((themeName: string): void => {});

const ThemeProviderWrapper: FC<BaseThemeProps> = ({ children }) => {
  const curThemeName =
    localStorage.getItem(LocalStorageConstant.APP_THEME) ||
    "NebulaFighterTheme";
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName: string): void => {
    localStorage.setItem(LocalStorageConstant.APP_THEME, themeName);
    _setThemeName(themeName);
  };
  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
};

export default ThemeProviderWrapper;
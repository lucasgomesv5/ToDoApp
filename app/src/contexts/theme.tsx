import { createContext, ReactNode, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import { darkTheme } from "../theme/darkTheme";
import { lightTheme } from "../theme/lightTheme";

enum ThemeType{
    light = 'light',
    dark = 'dark',
};

type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeContext = createContext({
  theme: ThemeType.light,
  toggleTheme: () => {}
});

export default function ThemeProvider({children}: ThemeProviderProps){
    const [theme, setTheme] = useState(ThemeType.light);
    const themes = {
        dark: darkTheme,
        light: lightTheme,
    };

    function toggleTheme(){
        if(theme === ThemeType.light){
            setTheme(ThemeType.dark)
        }else{
            setTheme(ThemeType.light)
        }
    };

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <StyledThemeProvider theme={themes[theme]}>
              {children}
            </StyledThemeProvider>  
        </ThemeContext.Provider>
    );
};
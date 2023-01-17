import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import * as Styled from './theme-icon-style';

export default function ThemeIcon(){

    const {theme, toggleTheme} = useContext(ThemeContext)

    return(
        <Styled.StyledContainer>
            <Styled.StyledTouchable
            onPress={toggleTheme}>
                {theme === 'light' 
                ? <Styled.StyledMoonIcon name="ios-moon" size={40}/>
                : <Styled.StyledSunIcon name="sunny" size={42}/> }
                
            </Styled.StyledTouchable>
        </Styled.StyledContainer>
    )
}
import React from "react";
import * as Styled from './dashboard-header-style'
import Text from "../text/text-index";

export default function DashboardHeader(){
    return(
        <Styled.StyledContainer>
            <Styled.StyledLogo source={require('../../assets/logo.png')}/>
            <Text size={'28px'} white bold>Lista de tarefas</Text>
        </Styled.StyledContainer>
    )
}
import React from "react";
import * as Styled from './dashboard-header-style'
import Text from "../text/text-index";
import Logout from "../logout-button/logout-button-index";

interface DashboardHeaderProps{
    logout?: () => void;
}

export default function DashboardHeader(props: DashboardHeaderProps){
    return(
        <Styled.StyledContainer>
            <Styled.StyledLogo source={require('../../assets/logo.png')}/>
            <Text size={'26px'} white bold>Lista de tarefas</Text>
            <Logout onPress={props.logout}/>
        </Styled.StyledContainer>
    )
}
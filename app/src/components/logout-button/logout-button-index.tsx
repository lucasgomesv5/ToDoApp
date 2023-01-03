import React from "react";
import * as Styled from './logout-button-style';

interface LogoutProps{
    onPress?: () => void;
};

export default function Logout(props: LogoutProps){
    return(
        <Styled.StyledTouchable {...props}>
            <Styled.StyledLogoutIcon 
              name="logout"
              size={28}/>
        </Styled.StyledTouchable>
    );
};
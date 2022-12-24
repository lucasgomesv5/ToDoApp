import React, { ReactNode } from "react";
import * as Styled from './text-input-style';

export interface TextInputProps{
    children?: ReactNode;
    label?: boolean;
    onChangeText?: any;
    placeholder?: string;
}

export default function TextIput(props: TextInputProps){
    return(
        <Styled.StyledContainer>
          {props.label &&(
            <Styled.StyledLabel>{props.children}</Styled.StyledLabel>
          )}
            <Styled.StyledTextInput placeholder={props.placeholder}/>
        </Styled.StyledContainer>
    )
}
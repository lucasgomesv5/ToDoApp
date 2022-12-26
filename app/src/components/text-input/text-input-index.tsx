import React, { ReactNode } from "react";
import * as Styled from './text-input-style';

export interface TextInputProps{
    children?: ReactNode;
    label?: boolean;
    onChangeText?: (arg: any) => void;
    placeholder?: string;
    password?: boolean;
}

export default function TextIput(props: TextInputProps){
    return(
        <Styled.StyledContainer>
          {props.label &&(
            <Styled.StyledLabel>{props.children}</Styled.StyledLabel>
          )}
            <Styled.StyledTextInput onChangeText={props.onChangeText} secureTextEntry={props.password} placeholder={props.placeholder}/>
        </Styled.StyledContainer>
    )
}
import { ReactNode } from "react";
import * as Styled from './button-style';

export interface ButtonProps{
    children?: ReactNode;
    onPress?: () => void;
    primary?: boolean;
}

export interface ButtonWrapperProps{
    marginTop?: number;
}

export default function Button(props: ButtonProps){
    return(
         <Styled.StyledButton {...props}>
            <Styled.StyledButtonText>{props.children}</Styled.StyledButtonText>
         </Styled.StyledButton>
    )
}
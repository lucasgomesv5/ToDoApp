import { ReactNode } from 'react';
import * as Styled from './text-style'

export interface TextProps{
    children?: ReactNode;
    size?: number;
    bold?: boolean;
    mini?: boolean;
    marginTop?: boolean;
    center?: boolean;
}

export default function Text(props: TextProps){
    return(
        <Styled.StyledText {...props}>{props.children}</Styled.StyledText>
    )
}
import { ReactNode } from 'react';
import * as Styled from './text-style'

export interface TextProps{
    children?: ReactNode;
    size?: string;
    bold?: boolean;
    mini?: boolean;
    marginTop?: boolean;
    center?: boolean;
    white?: boolean;
}

export default function Text(props: TextProps){
    return(
        <Styled.StyledText {...props}>{props.children}</Styled.StyledText>
    )
}
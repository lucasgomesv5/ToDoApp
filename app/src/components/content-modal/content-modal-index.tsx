import { ReactNode } from 'react';
import * as Styled from './content-modal-style';

export interface ContentModalProps{
    children?: ReactNode;
    marginTop?: string;
}

export default function ContentModal(props: ContentModalProps){
    return(
        <Styled.StyledContentModal {...props}>{props.children}</Styled.StyledContentModal>
    )
}
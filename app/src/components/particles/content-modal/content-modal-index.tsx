import { ReactNode } from 'react';
import * as Styled from './content-modal-style';
import * as Animatable from 'react-native-animatable'

interface ContentModalProps{
    children?: ReactNode;
}

export default function ContentModal(props: ContentModalProps){
    return(
        <Styled.StyledContentModal>{props.children}</Styled.StyledContentModal>
    )
}
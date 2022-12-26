import React from "react";
import * as Styled from './add-task-container-style'

interface AddTaskProps{
    onChangeText?: (arg: any) => void;
    onPress?: () => void;
    value?: any;
}

export default function AddTask(props: AddTaskProps){
    return(
        <Styled.StyledContainer>
            <Styled.StyledInput
            placeholder="Cadastre uma nova tarefa"
            onChangeText={props.onChangeText}
            value={props.value}
            />
            <Styled.StyledAdd onPress={props.onPress}>
                <Styled.StyledAddText>+</Styled.StyledAddText>
            </Styled.StyledAdd>
        </Styled.StyledContainer>
    )
}
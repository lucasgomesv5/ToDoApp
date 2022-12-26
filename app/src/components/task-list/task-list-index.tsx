import React from "react";
import * as Styled from './task-list-style'

export default function TaskList({data, deleteTask, editTask}: any){
    return(
        <Styled.StyledWrapper>
            <Styled.StyledTask>{data.descricao}</Styled.StyledTask>
            <Styled.StyledEditButton
              onPress={() => editTask(data.descricao)}>
                <Styled.StyledEditIcon name="edit" size={25}/>
            </Styled.StyledEditButton>
            <Styled.StyledTrashButton
              onPress={() => deleteTask(data.key)}>
                <Styled.StyledTrashIcon name="trash-2" size={25}/>
            </Styled.StyledTrashButton>
        </Styled.StyledWrapper>
    )
}
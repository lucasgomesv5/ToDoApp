import React from "react";
import * as Styled from './task-list-style'
import { DataType } from "../../screens/dashboard";

interface TaskListProps{
  data: DataType;
  deleteTask: (arg: string) => void;
  editTask: (arg: DataType) => void;
}

export default function TaskList({data, deleteTask, editTask}: TaskListProps){
    return(
        <Styled.StyledWrapper>
            <Styled.StyledTask>{data.descricao}</Styled.StyledTask>
            <Styled.StyledEditButton
              onPress={() => editTask(data)}>
                <Styled.StyledEditIcon name="edit" size={25}/>
            </Styled.StyledEditButton>
            <Styled.StyledTrashButton
              onPress={() => deleteTask(data.key)}>
                <Styled.StyledTrashIcon name="trash-2" size={25}/>
            </Styled.StyledTrashButton>
        </Styled.StyledWrapper>
    )
}
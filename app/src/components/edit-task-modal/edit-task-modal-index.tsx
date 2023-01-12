import React from "react";
import { ButtonWrapper, StyledButton, StyledButtonText } from "../button/button-style";
import * as Styled from './edit-task-modal-style';
import Text from '../text/text-index';
import TextIput from "../text-input/text-input-index";
import { Modal } from "react-native";

interface EditTaskModalProps{
    value?: string;
    onChangeText?: (arg: string) => void;
    visible?: boolean;
    closeModal?: () => void;
    editTaskModal?: () => void;
}

export default function EditTaskModal(props: EditTaskModalProps){
    return(
        <Modal
        transparent={true}
        animationType="slide">
          <Styled.StyledContainer>
            <Styled.StyledContent>
                <TextIput
                  label
                  placeholder="Digite aqui"
                  value={props.value}
                  onChangeText={props.onChangeText}>Nova descrição da tarefa</TextIput>
                  <ButtonWrapper marginTop={'30px'}>
                    <StyledButton onPress={props.editTaskModal} primary>
                        <StyledButtonText>Editar</StyledButtonText>
                    </StyledButton>
                    <StyledButton onPress={props.closeModal} transparent>
                        <StyledButtonText>Cancelar</StyledButtonText>
                    </StyledButton>
                  </ButtonWrapper>
            </Styled.StyledContent>
          </Styled.StyledContainer>
        </Modal>
    )
}
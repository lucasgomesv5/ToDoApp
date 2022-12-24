import React from "react";
import Button from "../../components/button/button-index";
import { ButtonWrapper } from "../../components/button/button-style";
import { Container } from "../../components/container/container";
import ContentModal from "../../components/content-modal/content-modal-index";
import TextIput from "../../components/text-input/text-input-index";
import Text from "../../components/text/text-index";

export default function Login(){
    return(
        <Container>
            <Text size={30} bold center>Bem Vindo(a)</Text>
            <ContentModal marginTop={40}>
                <TextIput 
                label 
                placeholder="usuario@email.com">Email</TextIput>
                <TextIput 
                label 
                placeholder="*********">Senha</TextIput>
                <ButtonWrapper marginTop={20}>
                   <Button primary>Entrar</Button>
                </ButtonWrapper>
                <ButtonWrapper marginTop={3}>
                   <Button transparent>Criar uma conta</Button>
                </ButtonWrapper>
                
            </ContentModal>
        </Container>
    )
}
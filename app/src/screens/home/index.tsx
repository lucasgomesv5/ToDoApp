import React from "react";
import { Image } from "react-native-animatable";
import Button from "../../components/particles/button/button-index";
import { ButtonWrapper } from "../../components/particles/button/button-style";
import { ContainerLogo } from "../../components/particles/container-logo/container-logo";
import { Container } from "../../components/particles/container/container";
import ContentModal from "../../components/particles/content-modal/content-modal-index";
import Text from "../../components/particles/text/text-index";

export default function Home(){
    return (
        <Container>
            <ContainerLogo>
              <Image
            source={require('../../assets/logo.png')}
            
              />
            </ContainerLogo>
            <ContentModal>
                <Text size={25} bold>Organize suas tarefas de qualquer lugar</Text>
                <Text mini marginTop>Faça login para começar</Text>
                <ButtonWrapper marginTop={50}>
                 <Button primary>Acessar</Button>
                </ButtonWrapper>
            </ContentModal>
        </Container>
    )
};
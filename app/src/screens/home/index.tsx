import { useNavigation } from "@react-navigation/native";
import React from "react";
import Button from "../../components/button/button-index";
import { ButtonWrapper } from "../../components/button/button-style";
import { ContainerLogo, StyledLogo } from "../../components/container-logo/container-logo";
import { Container } from "../../components/container/container";
import ContentModal from "../../components/content-modal/content-modal-index";
import Text from "../../components/text/text-index";
import ThemeIcon from "../../components/theme-icon/theme-icon-index";

type Nav = {
  navigate: (value: string) => void
}

export default function Home(){
  const navigation = useNavigation<Nav>();

  const handleLoginScreen = ()=>{
    navigation.navigate('Login')
  }
    return (
        <Container>
          <ThemeIcon/>
            <ContainerLogo>
              <StyledLogo source={require('../../assets/logo.png')}/>
            </ContainerLogo>
            <ContentModal>
                <Text size={'25px'} bold>Organize yours tasks from anywhere </Text>
                <Text mini marginTop>Login to get started</Text>
                <ButtonWrapper marginTop={'50px'}>
                 <Button onPress={handleLoginScreen} primary>Access</Button>
                </ButtonWrapper>
            </ContentModal>
        </Container>
    )
};
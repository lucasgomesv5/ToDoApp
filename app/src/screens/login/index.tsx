import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import Button from "../../components/button/button-index";
import { ButtonWrapper } from "../../components/button/button-style";
import { Container } from "../../components/container/container";
import ContentModal from "../../components/content-modal/content-modal-index";
import TextIput from "../../components/text-input/text-input-index";
import Text from "../../components/text/text-index";

import AuthContext from "../../contexts/auth";

type Nav = {
    navigate: (value: string) => void;
}

export default function Login(){
    const {signed, signIn} = useContext(AuthContext)
    const navigation = useNavigation<Nav>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(){
        try{
          signIn(email, password);
        }catch(error){
            console.log(error)
        };
    };

    function handleRegisterScreen(){
        navigation.navigate('Register')
    }
    return(
        <Container>
            <Text marginTop size={'30px'} bold center>Bem Vindo(a)</Text>
            <ContentModal marginTop={'40px'}>
                <TextIput 
                label 
                placeholder="usuario@email.com"
                onChangeText={(data: string) => setEmail(data)}>Email
                </TextIput>
                <TextIput 
                label 
                password
                placeholder="*********"
                onChangeText={(data: string) => setPassword(data)}>Senha</TextIput>
                <ButtonWrapper marginTop={'20px'}>
                   <Button 
                   primary
                   onPress={handleLogin}>Entrar</Button>
                </ButtonWrapper>
                <ButtonWrapper marginTop={'3px'}>
                   <Button 
                   transparent
                   onPress={handleRegisterScreen}>Criar uma conta</Button>
                </ButtonWrapper>
                
            </ContentModal>
        </Container>
    )
}
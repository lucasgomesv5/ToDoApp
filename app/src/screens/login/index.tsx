import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import { Alert } from "react-native";
import Button from "../../components/button/button-index";
import { ButtonWrapper } from "../../components/button/button-style";
import { Container } from "../../components/container/container";
import ContentModal from "../../components/content-modal/content-modal-index";
import TextIput from "../../components/text-input/text-input-index";
import Text from "../../components/text/text-index";

import firebase from '../../services/firebase/connection';
import AuthContext from "../../contexts/auth";

export default function Login(){
    const {signed, signIn} = useContext(AuthContext)
    const navigation = useNavigation<any>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(){
        try{
          signIn(email, password)
        }catch(error){
            console.log(error)
        };
    };

    function handleRegisterScreen(){
        navigation.navigate('Register')
    }
    return(
        <Container>
            <Text size={30} bold center>Bem Vindo(a)</Text>
            <ContentModal marginTop={40}>
                <TextIput 
                label 
                placeholder="usuario@email.com"
                onChangeText={(data: any) => setEmail(data)}>Email
                </TextIput>
                <TextIput 
                label 
                password
                placeholder="*********"
                onChangeText={(data: any) => setPassword(data)}>Senha</TextIput>
                <ButtonWrapper marginTop={20}>
                   <Button 
                   primary
                   onPress={handleLogin}>Entrar</Button>
                </ButtonWrapper>
                <ButtonWrapper marginTop={3}>
                   <Button 
                   transparent
                   onPress={handleRegisterScreen}>Criar uma conta</Button>
                </ButtonWrapper>
                
            </ContentModal>
        </Container>
    )
}
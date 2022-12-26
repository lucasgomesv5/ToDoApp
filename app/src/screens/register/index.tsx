import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert } from "react-native";
import Button from "../../components/button/button-index";
import { ButtonWrapper } from "../../components/button/button-style";
import { Container } from "../../components/container/container";
import ContentModal from "../../components/content-modal/content-modal-index";
import TextIput from "../../components/text-input/text-input-index";
import Text from "../../components/text/text-index";

import firebase from '../../services/firebase/connection';

export default function Register(){
    const navigation = useNavigation<any>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleRegister(){
        try{
          await firebase.auth().createUserWithEmailAndPassword(email, password);
          Alert.alert('Usuário criado com sucesso', 'Por favor, faça login para ter acesso.');
          navigation.navigate('Login');
        }catch(error){
            console.log(error)
        };
    };

    function handleBack(){
        navigation.goBack()
    };

    return(
        <Container>
            <Text size={'30px'} bold center>Cadastrar</Text>
            <ContentModal marginTop={40}>
                <TextIput 
                label 
                placeholder="usuario@email.com"
                onChangeText={(text: any) => setEmail(text)}>Email
                </TextIput>
                <TextIput 
                label 
                password
                placeholder="*********"
                onChangeText={(data: any) => setPassword(data)}>Senha</TextIput>
                <ButtonWrapper marginTop={20}>
                   <Button 
                   primary
                   onPress={handleRegister}>Criar conta</Button>
                </ButtonWrapper>
                <ButtonWrapper marginTop={3}>
                   <Button 
                   transparent
                   onPress={handleBack}>Voltar</Button>
                </ButtonWrapper>
                
            </ContentModal>
        </Container>
    )
}
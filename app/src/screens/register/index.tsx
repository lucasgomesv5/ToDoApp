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

type Nav = {
    navigate: (value: string) => void;
    goBack: () => void;
}

export default function Register(){
    const navigation = useNavigation<Nav>();
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
            <Text marginTop size={'30px'} bold center>Create an account</Text>
            <ContentModal marginTop={'40px'}>
                <TextIput 
                label 
                placeholder="usuario@email.com"
                onChangeText={(text: string) => setEmail(text)}>Email
                </TextIput>
                <TextIput 
                label 
                password
                placeholder="*********"
                onChangeText={(data: string) => setPassword(data)}>Password</TextIput>
                <ButtonWrapper marginTop={'20px'}>
                   <Button 
                   primary
                   onPress={handleRegister}>Register</Button>
                </ButtonWrapper>
                <ButtonWrapper marginTop={'3px'}>
                   <Button 
                   transparent
                   onPress={handleBack}>Go back</Button>
                </ButtonWrapper>
                
            </ContentModal>
        </Container>
    )
}
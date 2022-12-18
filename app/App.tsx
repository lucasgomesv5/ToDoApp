import React from "react";
import firebase from './src/firebase/connection';
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";


export default function App(){
  return(
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
  )
}
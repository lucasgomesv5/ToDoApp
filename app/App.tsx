import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import {AuthProvider} from "./src/contexts/auth";
import ThemeProvider from "./src/contexts/theme";

export default function App(){
  return(
    <ThemeProvider>
    <AuthProvider>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </AuthProvider>
    </ThemeProvider>
      
  )
}
import React, { createContext, useState } from "react";
import firebase from '../services/firebase/connection';

interface AuthContextData{
    signed?: boolean;
    signIn(email: string, passowrd: string): Promise<void>;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children}:any){
    const [isSigned, setIsSigned] = useState<object | null>(null);

    async function signIn(email: string, password: string){
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        setIsSigned(res.user)
    }
    return(
        <AuthContext.Provider value={{signed: !!isSigned, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

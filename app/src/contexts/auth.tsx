import React, { createContext, ReactNode, useState } from "react";
import firebase from '../services/firebase/connection';

interface AuthContextData{
    children?: ReactNode
    signed?: boolean;
    signIn?: (email: string, passowrd: string) => Promise<void>;
    userId?: string | null ;
    setUserId?: any;
    setIsSigned?: any;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children}:AuthContextData){
    const [isSigned, setIsSigned] = useState<object | null>(null);
    const [userId, setUserId] = useState<string | undefined | null>(null);

    async function signIn(email: string, password: string){
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        setIsSigned(res.user)
        setUserId(res.user?.uid);
    }
    return(
        <AuthContext.Provider value={{signed: !!isSigned, signIn, userId, setUserId, setIsSigned}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

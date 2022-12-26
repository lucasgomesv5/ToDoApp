import React, { createContext, useState } from "react";
import firebase from '../services/firebase/connection';

interface AuthContextData{
    signed?: boolean;
    signIn(email: string, passowrd: string): Promise<void>;
    userId?: any;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children}:any){
    const [isSigned, setIsSigned] = useState<object | null>(null);
    const [userId, setUserId] = useState<string | undefined | null>(null);

    async function signIn(email: string, password: string){
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        setIsSigned(res.user)
        setUserId(res.user?.uid);
    }
    return(
        <AuthContext.Provider value={{signed: !!isSigned, signIn, userId}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

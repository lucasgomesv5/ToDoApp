import React, { ReactNode, useContext } from "react";
import AuthContext from "../contexts/auth";
import AuthRoute from "../routes/auth";
import RegisterRoute from "../routes/register";

interface ProtectedRouteProps{
    children?: ReactNode;
}

export default function ProtectedRoute({children}: ProtectedRouteProps){
    const {signed} = useContext(AuthContext);

    if(signed){
        return <>{children}</>;
    } else{
        return <RegisterRoute/>;
    };
};
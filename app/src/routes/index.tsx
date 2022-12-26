import React, {useContext} from "react";
import AuthContext from "../contexts/auth";
import AuthRoute from "./auth";

import RegisterRoute from "./register";

export default function Routes(){
  const {signed} = useContext(AuthContext)
  return(
    signed ? <AuthRoute/> : <RegisterRoute/>
  )
}
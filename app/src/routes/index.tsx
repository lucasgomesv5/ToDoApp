import React from "react";
import ProtectedRoute from "../hocs/protectedRoute";
import AuthRoute from "./auth";

export default function Routes(){
  return(
    <AuthRoute/>
  );
};
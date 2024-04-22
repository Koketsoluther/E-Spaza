import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import { FiArrowRight } from "react-icons/fi";

const LoginButton=()=>{
    const {loginWithRedirect,isAuthenticated}=useAuth0();
    return(
        !isAuthenticated &&(
            <button className="secondary-button" onClick={()=> loginWithRedirect()}>
                Sign In <FiArrowRight />{" "} 
            </button>
        )
     
    )
}
export default LoginButton
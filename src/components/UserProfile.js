import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
const UserProfile=()=>{

    const {user,isAuthenticated}=useAuth0();
    
    return (
        isAuthenticated && (
        
            <article className="column">
                <p>{user.sub}</p>
            </article>
        )
    )
}

export default UserProfile
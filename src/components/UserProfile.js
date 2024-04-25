import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
const UserProfile=()=>{

    const {user,isAuthenticated}=useAuth0();
    
    return (
        isAuthenticated && (
            <article className="column">
                {user?.picture && <img src={user.picture} alt={user?.name} />}
                <p>name:{user.name}</p>
                <p>{user['https://my-app.example.com/roles']}</p>

            </article>
        )
     
    )
}

export default UserProfile
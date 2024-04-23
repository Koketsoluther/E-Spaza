import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
const users = [{email: "nothandonkambule1@gmail.com", Role: "Shopper"},{email: "iamluther@gmail.com", Role: "Admin"}];
let userrole = "";
const UserProfile=()=>{

    const {user,isAuthenticated}=useAuth0();
    
    let foundUser = false;
    for (var userdt of users) {
        if (userdt.email === user?.email) {
            userrole = userdt.Role;
            foundUser = true;
            break;
        }
    }

    return (
        isAuthenticated && (
            <article className="column">
                {user?.picture && <img src={user.picture} alt={user?.name} />}
                {foundUser ? (
                    <h2>Welcome {userrole} {user?.name}</h2>
                ) : (
                    <h2>Sorry, you are not part of our database. Call helpline for assistance.</h2>
                )}
            </article>
        )
     
    )
}

export default UserProfile
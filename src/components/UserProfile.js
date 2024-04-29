import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState} from 'react';
import Admin from './AdminPage/AdminDashboard';

const UserProfile=()=>{
    const {user,isAuthenticated}=useAuth0();
    //const userRole = user?.['https://my-app.example.com/roles'];
    
    console.log("User role:", user?.['https://my-app.example.com/roles']); 
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        // Extract user role from the array and set it in state
        const roles = user?.['https://my-app.example.com/roles'];
        if (roles && roles.length > 0) {
            setUserRole(roles[0]); // Assuming the first role in the array is the primary role
        }
    }, [user]);
    if (!isAuthenticated) {
        return <div>Not authenticated. Please sign in.</div>; // Handle case when user is not authenticated
    }

    if (!userRole) {
        return <div>User role not available.</div>; // Handle case when user role is missing
    }
    return(
        <div>
    {userRole === 'Shopper' ? (
        <article className="column">
            {user?.picture && <img src={user.picture} alt={user?.name} />}
            <h2>{user?.name}</h2>
            <p>Email: {user?.email}</p>
            <p>Nickname: {user?.nickname}</p>
            <p>Role: {userRole}</p>
        </article>
    ) : userRole === 'Admin' ? (
        <Admin />
    ) : (
        <article className="column">
            {user?.picture && <img src={user.picture} alt={user?.name} />}
            <h2>{user?.name}</h2>
            <p>Email: {user?.email}</p>
            <p>Nickname: {user?.nickname}</p>
            <p>Role: {userRole}</p>
        </article>
    )}
    </div>
    );

   /* if (userrole === 'Shopper') {
        return (
            <article className="column">
                {user?.picture && <img src={user.picture} alt={user?.name} />}
                <h2>{user?.name}</h2>
                <p>Email: {user?.email}</p>
                <p>Nickname: {user?.nickname}</p>
                <p>Role: {user['https://my-app.example.com/roles']}</p>
            </article>
        );
    } else if (userrole === 'Admin') {
        return <Admin />;
    } else  {
        return (
            <article className="column">
                {user?.picture && <img src={user.picture} alt={user?.name} />}
                <h2>{user?.name}</h2>
                <p>Email: {user?.email}</p>
                <p>Nickname: {user?.nickname}</p>
                <p>Role: {user['https://my-app.example.com/roles']}</p>
            </article>
        );*/
    
};


export default UserProfile
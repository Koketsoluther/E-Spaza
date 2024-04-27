import React from 'react';
import './index.css' ;
import LoginButton from './components/LoginForm/LoginButton';
import LogoutButton from './components/LoginForm/LogoutButton';
import UserProfile from './components/UserProfile';


function App() {

  return (
    <main className='column'>
       <h1>E-spaza Login</h1>
       <LoginButton/>
       <LogoutButton/>
       <UserProfile/>
      </main>
      
  );
}

export default App;
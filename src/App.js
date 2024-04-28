import React from 'react';
import './index.css';
import backgroundImage from '../src/components/Assets/E-Spaza.webp';
import LoginButton from './components/LoginForm/LoginButton';
import LogoutButton from './components/LoginForm/LogoutButton';
import UserProfile from './components/UserProfile';
import Products from './components/Products/products';

function App() {
  const mainStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'blue'
    // Add any other styles as needed
  };

  return (
    <div>
      <main className='column' style={mainStyle}>
        <h1>E-spaza Login</h1>
        <LoginButton />
        <LogoutButton />
        <UserProfile />
      </main>
      <Products />
    </div>
  );
}

export default App;

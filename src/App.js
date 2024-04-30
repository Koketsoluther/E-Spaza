import React from 'react';
import './index.css' ;
import LoginButton from './components/LoginForm/LoginButton';
import LogoutButton from './components/LoginForm/LogoutButton';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home  from './pages/Home/Home';
import Cart from './pages/Cart/Cart';


function App() {

  return (
    //<main className='app'>
       //<h1>E-spaza Login</h1>
       //<LoginButton/>
       //<LogoutButton/>
       //<UserProfile/>
      ///</main>
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>

      </div>
      
  );
}

export default App;
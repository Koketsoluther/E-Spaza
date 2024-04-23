import React from 'react';
import './index.css';
import './components/LandingPage/Home.css';
import './components/UserPage'
import Home from './components/LandingPage/Home';
import UserPage from './components/UserPage';

function App() {
  return (
    <div className='App'>
      <Home />

      <UserPage/>

     
    </div>
  );
}

export default App;

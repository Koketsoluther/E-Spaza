import React from 'react';
import './index.css' ;
import './components/LandingPage/Home.css'
// import LoginButton from './components/LoginForm/LoginButton';
// import LogoutButton from './components/LoginForm/LogoutButton';
// import UserProfile from './components/UserProfile';
//import Home from './components/LandingPage/Home';
// import About from "./Components/About";
// import Work from "./Components/Work";
// import Testimonial from "./Components/Testimonial";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";
import Admin from './components/AdminPage/AdminDashboard';

function App() {
  
  return (
    // <main className='column'>
    //   <h1>Auth0 Login</h1>
    //   <LoginButton/>
    //   <LogoutButton/>
    //   <UserProfile/>

      <div className='App'>
     
      <Admin/>
      

      </div>
    

    

  );
}

export default App;
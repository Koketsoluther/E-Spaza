import React from 'react';
import './index.css' ;
//import './components/LandingPage/Home.css'
import LoginButton from './components/LoginForm/LoginButton';
import LogoutButton from './components/LoginForm/LogoutButton';
import UserProfile from './components/UserProfile';
//import Home from './components/LandingPage/Home';
// import About from "./Components/About";
// import Work from "./Components/Work";
// import Testimonial from "./Components/Testimonial";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";
//import Admin from './components/AdminPage/AdminDashboard';

function App() {
  /*const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic here (e.g., set user credentials)
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear user credentials)
    setIsLoggedIn(false);
  };*/
  return (
    
      <main className='column'>
       <h1>Auth0 Login</h1>
       <LoginButton/>
       <LogoutButton/>
       <UserProfile/>
       
    </main>
    
    /* <main className='column'>
       <h1>Auth0 Login</h1>
       <Home/> 
       <LogoutButton/>      
      <UserProfile/>
    </main>*/
    
/*<div className='App'>
  <Home />
  <UserProfile/>
  <LogoutButton/>
</div>*/
    

  );
}

export default App;
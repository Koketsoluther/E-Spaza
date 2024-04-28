import React from 'react';
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Login from '../LoginForm/LoginButton'
//import Admin from '../AdminPage/AdminDashboard'



const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
    <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Shopping Spot!
          </h1>
          <p className="primary-text">
           Life Has Never Been This Easy With Just One Click Into Spaza, 
           No Need To Carry Around Those Plastic Bags. 
          </p>

         <p className="primary-text" animate = 'visible'>Ungasali emuva,Joina iSpaza Shopping Nam'hlanje!</p>
          
            <Login/> 

         
        </div>
        
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
    
  );
};

export default Home
import React from 'react';
import Logout from './LoginForm/LogoutButton';
import UserProfile from './UserProfile'; // Import UserProfile
import Navbar from './LandingPage/Navbar';
import { FiArrowLeft } from "react-icons/fi";

const UserPage = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className="home-banner-container">
        <div>
          <section className='column'>
            <h1>Auth0 Log</h1>
            <button className="secondary-button"> <Logout /> Log Out <FiArrowLeft />{" "} </button>
            {/* Render UserProfile here */}
            <section>
              <UserProfile />
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserPage;

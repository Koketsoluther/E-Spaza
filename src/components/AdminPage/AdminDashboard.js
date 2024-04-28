import React, { useState } from 'react';
import './admin.css';
import Dashboard from './Dashboard';
import UserManagement from './UserManagement';
import Managestock from './Managestock';

// Sidebar component
const Sidebar = ({ setActiveMenu }) => {
  const menuItems = ['Dashboard', 'User Management', 'Manage stock'];

  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} onClick={() => setActiveMenu(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main content component
const MainContent = ({ activeMenu }) => {
    let ContentComponent;

  switch (activeMenu) {
    case 'Dashboard':
      ContentComponent = Dashboard;
      break;
    case 'User Management':
      ContentComponent = UserManagement;
      break;
    case 'Manage stock':
      ContentComponent = Managestock;
      break;
    default:
      ContentComponent = () => <div><h2>{activeMenu}</h2><p>This content is not implemented yet.</p></div>;
  }

  return (
    <div className="main-content">
      <ContentComponent />
    </div>
  );
};

// App component
const App = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  return (
    <div className="app">
      <nav className="navbar">
        <h1>Welcome Admin </h1>
      </nav>
      <div className="container">
        <Sidebar setActiveMenu={setActiveMenu} />
        <MainContent activeMenu={activeMenu} />
      </div>
    </div>
  );
};

export default App;

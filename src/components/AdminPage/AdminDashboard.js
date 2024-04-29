import React, { useState } from 'react';
import './admin.css';
import Dashboard from './Dashboard';
import UserManagement from './UserManagement';
//import Managestock from './Managestock';
import Addstaff from './AddStaff';

// Sidebar component
const Sidebar = ({ setActiveMenu }) => {
  const menuItems = ['Dashboard', 'User Management', 'Add new Staff', 'Manage stock'];

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
      //ContentComponent =  () => <div><h2>{activeMenu}</h2><p>This content is not implemented yet.</p></div>;
      break;
    case 'User Management':
      ContentComponent= UserManagement;
      ContentComponent = () => <div><h2>{activeMenu}</h2><p>This content is not implemented yet.</p></div>;
      break;
    case 'Manage stock':
      ContentComponent = () => <div><h2>{activeMenu}</h2><p>This content is not implemented yet.</p></div>;
      break;
    case 'Add new Staff':
      ContentComponent = Addstaff;
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

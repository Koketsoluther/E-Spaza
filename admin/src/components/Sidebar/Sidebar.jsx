import React , { useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


const Sidebar = () => {

    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

    const toggleProductsDropdown = () => {
      setIsProductsDropdownOpen(!isProductsDropdownOpen);
    };

    const [isShopsDropdownOpen, setIsShopsDropdownOpen] = useState(false);

    const toggleShopsDropdown = () => {
      setIsShopsDropdownOpen(!isShopsDropdownOpen);
    };


    return (
        <div className = 'sidebar'>
            <div className = "sidebar-options">
            <NavLink to= '/' className= "sidebar-option">
                    <p>Dashboard</p>
                </NavLink>
            <div className='sidebar-option' onClick={toggleProductsDropdown}>
                <img src={assets.product_icon} alt='' />
                <p>Products</p>
                {isProductsDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
        {isProductsDropdownOpen && (
          <div className='dropdown-menu'>
            <NavLink to='/ListProduct' className='dropdown-item'>
              <p>List Products</p>
            </NavLink>
            <NavLink to='/Addproduct' className='dropdown-item'>
              <p>Add Products</p>
            </NavLink>
          </div>
        )}
<div className='sidebar-option' onClick={toggleShopsDropdown}>
                <p>Shops</p>
                {isShopsDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
        {isShopsDropdownOpen && (
          <div className='dropdown-menu'>
            <NavLink to= '/Addshop' className= "sidebar-option">
                    <img  src= {assets.add_shop} alt = ""/>
                    <p>Add Shops</p>
            </NavLink>
            <NavLink to='/shops' className='dropdown-item'>
              <p>View all shops</p>
            </NavLink>
          </div>
        )}
                
                

                <NavLink to= '/Addstaff' className= "sidebar-option">
                    <img  src= {assets.add_staff} alt = ""/>
                    <p>Add Staff</p>
                    </NavLink>
                <NavLink to= '/Managestock' className= "sidebar-option">
                    <img src= {assets.manage_stock} alt = ""/>
                    <p>Manage stock</p>
                </NavLink>

            </div>

        </div>
    )
}
export default Sidebar
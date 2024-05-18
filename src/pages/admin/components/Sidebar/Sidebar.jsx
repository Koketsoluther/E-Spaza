import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
    return (
        <div className = 'sidebar'>
            <div className = "sidebar-options">
                <NavLink to= '/ListProduct' className= "sidebar-option">
                <img  src= {assets.product_icon} alt = ""/>
                    <p>List Products</p>
                </NavLink>
                <NavLink to= '/Addproduct' className= "sidebar-option">
                    <img  src= {assets.add_product} alt = ""/>
                    <p>Add Products</p>
                    </NavLink>
                <NavLink to= '/Addshop' className= "sidebar-option">
                    <img  src= {assets.add_shop} alt = ""/>
                    <p>Add Shops</p>
                    </NavLink>
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
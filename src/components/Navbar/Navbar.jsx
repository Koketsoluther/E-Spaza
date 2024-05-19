import React from "react";
import './Navbar.css'
import { assets } from "../Assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../LoginForm/LoginButton";
import LogoutButton from "../LoginForm/LogoutButton";
import Admin from "../admin/admin"
import UserProfile from "../UserProfile";
import AdminButton from "../admin/adminbutton";

const Navbar=()=>{
    
    const [menu,setMenu]= useState("home")
    return(
        <div className="navbar">
            <Link to="/"><h1>E-spaza</h1></Link>
 
            <ul className="navbar-menu">
                <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
                <a href="#explore-food" onClick={()=>setMenu("orders")} className={menu==="orders"?"active":""}>orders</a>
                <li onClick={()=>setMenu("about-us")} className={menu==="about-us"?"active":""}>about Us</li>
                <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>

            </ul>
            <section className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link>
                    <div className="dot"></div>
                </div>
                
                
                <LoginButton/>
                
                <section>
                    <AdminButton/>
                </section>
                
                <LogoutButton/>

            </section>
        </div>
    )
}

export default Navbar
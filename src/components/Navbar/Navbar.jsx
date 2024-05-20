import React, { useContext } from "react";
import './Navbar.css'
import { assets } from "../Assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../LoginForm/LoginButton";
import LogoutButton from "../LoginForm/LogoutButton";
import UserProfile from "../UserProfile";
import { StoreContext } from "../../context/StoreContext";

const Navbar=()=>{

    const [menu,setMenu]= useState("home");
    const {getTotalCartAmount}= useContext(StoreContext)
    return(
        <div className="navbar" data-testid="navbar">
            <Link to="/"><h1>E-spaza</h1></Link>
 
            <ul className="navbar-menu">
                <Link to='/' onClick={()=>setMenu("home")} data-testid="home" className={menu==="home"?"active":""}>home</Link>
                <a href="#explore-food" onClick={()=>setMenu("orders")} className={menu==="orders"?"active":""}>orders</a>
                <a href="#footer" onClick={()=>setMenu("about-us")} className={menu==="about-us"?"active":""}>about Us</a>
                <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>

            </ul>
            <section className="navbar-right">
                <img src={assets.search_icon} alt="/search icon/i" />
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} alt="/basket icon/i"/></Link>
                    <div data-testid="cart-dot"  className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
 
                <LoginButton/>
                <UserProfile/>  
                <LogoutButton/>

            </section>
        </div>
    )
}

export default Navbar
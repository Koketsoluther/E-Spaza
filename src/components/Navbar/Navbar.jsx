import React from "react";
import './Navbar.css'
import { assets } from "../Assets/assets";
import { useState } from "react";
const Navbar=()=>{

    const [menu,setMenu]= useState("home")
    return(
        <div className="navbar">
            <h1>E-spaza</h1>
            <ul className="navbar-menu">
                <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
                <li onClick={()=>setMenu("orders")} className={menu==="orders"?"active":""}>orders</li>
                <li onClick={()=>setMenu("about-us")} className={menu==="about-us"?"active":""}>about Us</li>
                <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>

            </ul>
            <section className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>

                <button>sign in</button>

            </section>

        </div>
    )
}

export default Navbar
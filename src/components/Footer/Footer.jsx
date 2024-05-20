import React from "react";
import './Footer.css'
import { assets } from "../Assets/assets";

const Footer=()=>{
    return(
        <div className="footer" id='footer' data-testid="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <h2>E-spaza</h2>
                    <p>We are e-spaza</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />

                    </div>

                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>0874643637</li>
                        <li>espaza@gmail.com</li>
                    </ul>

                </div>


            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Espaza.com - All Right Reserved</p>

        </div>
    )
}

export default Footer
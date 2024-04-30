import React from "react";
import './Header.css'
const Header=() =>{
    return(
        <div className="header" data-testid="header-component">
            <div className="header-contents">
                <h2>Order your favourite products at lower prices</h2>
                <p>Choose from a diverse category of products</p>
                <button><a href="#explore-food">View Products</a></button>

            </div>

        </div>
    )
}

export default Header
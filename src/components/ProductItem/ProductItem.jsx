import React, { useContext } from "react";
import './ProductItem.css';
import { assets } from "../Assets/assets";
import { StoreContext } from "../../context/StoreContext";

const ProductItem = ({ id, NAME, PRICE, IMAGE }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    return (
        <div className="product-item">
            <div className="product-item-img-container">
                <img className="product-item-image" src={"http://localhost:4000/images/" + IMAGE} alt={NAME + " image"} />
                {!cartItems[id]
                    ? <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="add icon" />
                    : <div className="product-item-counter">
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="remove icon" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="add icon in counter" />
                    </div>
                }
            </div>

            <div className="product-item-info">
                <div className="product-item-name-rating">
                    <p>{NAME}</p>
                    <img src={assets.rating_starts} alt="rating stars" />
                </div>
                <p className="product-item-price">R{PRICE}</p>
            </div>
        </div>
    );
};

export default ProductItem;
import React, { useContext /*useState*/ } from "react"
import './ProductItem.css'
import { assets } from "../Assets/assets"
import { StoreContext } from "../../context/StoreContext";

const ProductItem=({id, NAME, PRICE, IMAGE, STOCK})=>{
    //const[itemCount,setItemCount]=useState(0);
    const {cartItems, addToCart, removeFromCart}=useContext(StoreContext);
    return(
        <div className="product-item">
            <div className="product-item-img-container">
                <img className="product-item-image" src={"https://us-central1-e-spazadb.cloudfunctions.net/func/images/"+IMAGE} alt={NAME + " image"}/>
                {!cartItems[id]
                    ?<img className="add" onClick={()=>addToCart(id, STOCK)} src={assets.add_icon_white} alt="add icon" />
                    :<div className="product-item-counter">
                        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="remove icon"  />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id, STOCK)} src={assets.add_icon_green} alt="add icon in counter" />
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
    )
}

export default ProductItem
import React from "react";
import './Cart.css'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";


const Cart=() =>{
    
    const {cartItems, foodData,removeFromCart, getTotalCartAmount}=useContext(StoreContext)
    const navigate=useNavigate();
    return(
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>

                </div>
                <br />
                <hr />
                {foodData.map((item, index)=>{
                    if(cartItems[item._id]>0){
                      
                        return(
                            <div>
                                <div className="cart-items-title cart-items-item">
                                <img src={"http://localhost:4000/images/"+item.IMAGE} alt="" />
                                <p>{item.NAME}</p>
                                <p>R{item.PRICE}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>R{item.PRICE*cartItems[item._id]}</p>
                                <p onClick={()=>removeFromCart(item._id)}  className="cross">-</p>

                            </div>
                            <hr/>
                            </div>
                            
                        )
                    }
                    else{
                        return null;
                    }
                })}

            </div>

            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p data-testid="subtotal">R{getTotalCartAmount()}</p>

                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p data-testid="delivery-fee">R{getTotalCartAmount()===0?0:2}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b data-testid="total">R{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>

                        </div>
                    </div>
                    <button onClick={()=>navigate('/order')}>Proceed to checkout</button>



                </div>
                
            </div>


        </div>
    )
}

export default Cart
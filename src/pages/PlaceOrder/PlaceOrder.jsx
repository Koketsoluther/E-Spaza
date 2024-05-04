import React, { useContext } from "react";
import './PlaceOrder.css'
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder=()=>{
    const{getTotalCartAmount}=useContext(StoreContext)
    return(
        <form className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />

                </div>

                <input type="email" placeholder="Email"/>
                <input type="text" placeholder="Street" />

                <div className="multi-fields">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="Province" />

                </div>

                <div className="multi-fields">
                    <input type="text" placeholder="Postal code" />
                    <input type="text" placeholder="Country" />

                </div>
                <input type="phone" placeholder="Phone" />


            </div>

            <div className="place-order-right">
            <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>R{getTotalCartAmount()}</p>

                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>R{2}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>R{getTotalCartAmount()+2}</b>

                        </div>
                    </div>
                    <button>PROCEED TO PAYMENT</button>



                </div>

            </div>
        </form>

    )
}

export default PlaceOrder
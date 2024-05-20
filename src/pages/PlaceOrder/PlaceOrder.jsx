import React, { useContext, useEffect, useState } from "react";
import './PlaceOrder.css'
import { StoreContext } from "../../context/StoreContext";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const PlaceOrder=()=>{
    const {user, isAuthenticated} = useAuth0()
    const{getTotalCartAmount, cartItems,foodData}=useContext(StoreContext)

    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        email: "",
        street: "",
        city: "",
        province: "",
        country:"",
        postalcode:"",
        phone:"",

    }) 

    useEffect(()=>{
        console.log(data)
    },[data])

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data=>({...data,[name]:value}))
    }

    const placeOrder = async (event) =>{
        event.preventDefault()
        let orderItems = []
        foodData.forEach((item)=>{
            if(cartItems[item._id]>0){
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id]
                orderItems.push(itemInfo)
            }
            
        })

        let orderData = {
            ADDRESS: data,
            ITEMS: orderItems,
            AMOUNT: getTotalCartAmount()+2,
            userId: user.sub
        }

        if(isAuthenticated){
            let res = axios.post("http://localhost:4000/api/order/place",orderData)
            console.log(res.data)
        }

       

    }

    return(
        <form onSubmit={placeOrder} className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First Name" />
                    <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last Name" />

                </div>

                <input name='email' onChange={onChangeHandler} value={data.email}  type="email" placeholder="Email"/>
                <input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder="Street" />

                <div className="multi-fields">
                    <input name='city' onChange={onChangeHandler} value={data.city}  type="text" placeholder="City" />
                    <input name='province' onChange={onChangeHandler} value={data.province}  type="text" placeholder="Province" />

                </div>

                <div className="multi-fields">
                    <input  name='postalcode' onChange={onChangeHandler} value={data.postalcode} type="text" placeholder="Postal code" />
                    <input name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder="Country" />

                </div>
                <input name='phone' onChange={onChangeHandler} value={data.phone}  type="phone" placeholder="Phone" />


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
                            <p>R{getTotalCartAmount()===0?0:2}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>R{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>

                        </div>
                    </div>
                    <button type="submit" >PLACE ORDER</button>



                </div>

            </div>
        </form>

    )
}

export default PlaceOrder
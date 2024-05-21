import React, {useState, useEffect, useCallback } from "react"
import "./MyOrders.css"
import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios"
import { assets } from "../../components/Assets/assets"

const MyOrders = () => {

    const {user, isAuthenticated} = useAuth0()
    const [data, setData] = useState([])

    const fetchOrders = useCallback(async () =>{
        if(isAuthenticated){
         const res = await axios.post("http://localhost:4000/api/order/userorders", {userId: user.sub})
         console.log(res.data.data)
         if(res.data.success){
            setData(res.data.data)
         } 
         
        }
        else{
            console.log("YOU AINT SUPPOSED TO BE HERE BOY!!!1")
        }
    },[isAuthenticated, user]);

    useEffect(()=>{
        fetchOrders();
    },[fetchOrders])

    return(
        <div>
            <div className="my-orders">
                <h2>My Orders</h2>
                <div className="container">
                    {data.map((order, index)=>{
                        return (
                            <div key={index} className ='my-orders-order'>
                                <img src={assets.parcel_icon} alt=""/>
                                    <p>{order.ITEMS.map((item, index)=>{
                                        if(index === order.ITEMS.length-1){
                                                return item.NAME+ " : "+ item.quantity
                                        }
                                        else{
                                            return item.NAME+ " : "+ item.quantity+","
                                        }
                                    })}</p>
                                    <p>R{order.AMOUNT}</p>
                                    <p>You ordered {order.ITEMS.length} items.</p>
                                    <p><span>&#x25cf;</span><b>{order.STATUS}</b> </p> 
                                    
                                
                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}

export default MyOrders
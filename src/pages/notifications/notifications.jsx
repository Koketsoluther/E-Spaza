import React, {useState, useEffect, useCallback } from "react"
import "./notifications.css"
import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios"
import { assets } from "../../components/Assets/assets"

const Notifications = () => {

    const {user, isAuthenticated} = useAuth0()
    const [data, setData] = useState({})

    const fetchOrders = useCallback(async () =>{
        if(isAuthenticated){
         const res = await axios.post("https://us-central1-e-spazadb.cloudfunctions.net/func/api/user/getnotis", {userId: user.sub})
         console.log(res.data.data)
         if(res.data.success){
            setData(res.data.data)
            console.log(data)
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
                <h2>Notifications</h2>
                <div className="container">
                    {Object.keys(data).map((orderId, index)=>{
                        console.log(orderId)
                        
                        const order = data[orderId];
                        var d = new Date(order.DATE)
                        return (
                            <div key={index} className ='my-orders-order'>
                                <img src={assets.parcel_icon} alt=""/>
                                   <p>{d.toString()}</p>
                                    <p><span>&#x25cf;</span><b>{order.MESSAGE}</b> </p> 
                                    
                                
                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}

export default Notifications
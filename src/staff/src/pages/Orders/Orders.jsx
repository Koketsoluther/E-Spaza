import React from 'react'
import './Orders.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { assets } from '../../assets/assets'


const url = "http://localhost:4000"
const Orders = ({url}) => {

 const [orders,setOrders] = useState([]);

  //storing data coming from the api
  const fetchAllOrders = async()=>{
    const response = await axios.get(url+" /api/order/list");

    if (response.data.success){
      setOrders(response.data.data);
    }
    else{
      toast.error("Error");
    }

  }



  return (

    //to display the orders

    <div className='order add'>
      <h3>Orders</h3>
      <div className='order-list'>
        {orders.map((order,index)=>(
          <div key={index} className='order-item'>
          <img src={assets.parcel_icon} alt='' />
          <div>
            <p className='order-item-food'> 
                {order.items.map((item,index)=>{

                  if(index === order.items.length-1){
                    return item.name + "x" +item.quantity
                  }
                  else{
                    return item.name + "x" + item.quantity + " ,"
                  }
                })}
            </p>
            <p className='order-item-name'>{order.address.firstName+ " " + order.address.lastName}</p>
            <div className=' order-item-address'>
              <p>{order.address.street + ","}</p>
              <p>{order.address.city + ", " + order.address.state + ", "+ order.address.country + ", " +order.address.zipcode}</p>
            </div>
            <p className='order-item-phone'> {order.address.phone}</p>

          </div>
          <p> Items : {order.items.length}</p>
          <p> R{order.amount}</p>
          <select>
            <option value = "Processing"></option>
            <option value = "Out for Delivery"></option>
            <option value = "Delivered"></option>
          </select>
           </div>
        )
        )}
      </div>
    </div>
  )
}

export default Orders
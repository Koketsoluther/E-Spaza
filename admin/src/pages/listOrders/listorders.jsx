import React, {useState, useEffect} from 'react'
import './listorders.css'
import axios from "axios"
import {toast} from "react-toastify"

const List = () => {
    const url = "http://localhost:4000"
    const [list,setList] = useState([]);

    const fetchList =async () => {
        const response =await axios.get(`${url}/api/orders/list`);

        if(response.data.success){
            setList(response.data.data)
        }
        else{
            toast.error("error")
        }
    }

  
    useEffect(()=>{
        fetchList();
    },[])
    return (
        <div className='list add flex-col'>
            <p>All product list</p>
            <div className='list-table'>
                <div className = "list-table-format title">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                {list.map((item,index)=>{
                    return (
                       <div key={index} className='list-table-format'>
                            <img src={`${url}/images/`+item.IMAGE} alt = "" />
                            <p>{item.NAME}</p>
                            <p>{item.CATEGORY}</p>
                            <p>${item.PRICE}</p>
                            <p onClick={()=>removeProduct(item._id)} className='cursor'>X</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default List
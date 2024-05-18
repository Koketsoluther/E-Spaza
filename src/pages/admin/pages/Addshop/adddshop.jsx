import React, { useState } from 'react'
import './addshop.css'



const Add = () => {


const [data,setData] = useState({
    name: "",
    address:"",
    ownername:"",
    
})
const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
}

const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name)
    formData.append("address",data.address)
    formData.append("ownername",data.ownername)
    
}
    return (
        <div className='add'>
            <form className = "flex-col" onSubmit={onSubmitHandler}>
                
                <div className = "add-Shop-name flex-col">
                    <p> Shop Name</p>
                    <input onChange={onChangeHandler}  value={data.name} type= "text" name='name' placeholder = 'Type here'/>
                </div>
                <div className = "add-Shopowner-name flex-col">
                    <p> Shop Owner Name</p>
                    <input onChange={onChangeHandler}  value={data.name} type= "text" name='ownername' placeholder = 'Type here'/>
                </div>
                <div className ="add-Shop-Address flex-col">
                    <p> Shop address</p>
                    <textarea onChange={onChangeHandler} value={data.description} name='addresss' rows="6" placeholder='Write address here' required></textarea>

                </div>
                
                <button type= "submit" className='add-button'>Add</button>
            </form>
            
        </div>
    )
}

export default Add
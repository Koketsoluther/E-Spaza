import React, { useState } from 'react'
import './addstaff.css'
import axios from 'axios'
import {toast} from "react-toastify"

const Add = () => {
const url = "http://localhost:4000"

const [data,setData] = useState({
    NAME: "",
    SURNAME:"",
    SHOP:"",
    IDNUMBER: "",
    STAFFPASSWORD:"",
    PERMISSION: "Staff"
    
})
const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
}

const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("NAME",data.NAME)
    formData.append("SURNAME",data.SURNAME)
    formData.append("SHOPID",Number(data.SHOP))
    formData.append("IDNUMBER",data.IDNUMBER)
    formData.append("STAFFPASSWORD",data.STAFFPASSWORD)
    formData.append("PERMISSION",data.PERMISSION)
    const response= await axios.post(`${url}/api/staff/add`,{})
    console.log(response)
    if (response.data.success){
        toast.success(response.data.message)
    }
    else{
        toast.error("Error")
    }
}
    return (
        <div className='add'>
            <form className = "flex-col" onSubmit={onSubmitHandler}>
                
                <div className = "add-Staff-first-name flex-col">
                    <p>Staff Firstname</p>
                    <input onChange={onChangeHandler}  value={data.NAME} type= "text" name='NAME' placeholder = 'Type here'/>
                </div>
                <div className = "add-Shopowner-name flex-col">
                    <p>Staff Surname</p>
                    <input onChange={onChangeHandler}  value={data.SURNAME} type= "text" name='SURNAME' placeholder = 'Type here'/>
                </div>
                <div className = "add-Shop-name flex-col">
                    <p>Shop name</p>
                    <input onChange={onChangeHandler}  value={data.SHOP} type= "text" name='SHOPID' placeholder = 'Type here'/>
                </div>
                <div className = "add-staffIDnumber flex-col">
                    <p>Staff ID number</p>
                    <input onChange={onChangeHandler}  value={data.IDNUMBER} type= "text" name='IDNUMBER' placeholder = 'Type here' required/>
                </div>
                <div className = "add-staffpassword flex-col">
                    <p>Default Staff password</p>
                    <input onChange={onChangeHandler}  value={data.STAFFPASSWORD} type= "text" name='STAFFPASSWORD' placeholder = 'Type here'/>
                </div>
                <div className='add-staffpermission flex col'>
                        <p>Choose Staff Permission</p>
                        <select name="PERMISSION" onChange={onChangeHandler}  >
                            <option value= {data.PERMISSION}>Owner</option>
                            <option value= {data.PERMISSION}>Staff</option>
                        </select>
                    </div>
                
                
                <button type= "submit" className='add-button'>Add</button>
            </form>
            
        </div>
    )
}
// className="signin" onClick={handleClick} onChange={handleChange}>

export default Add
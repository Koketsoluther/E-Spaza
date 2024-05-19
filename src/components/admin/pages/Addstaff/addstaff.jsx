import React, { useState } from 'react'
import './addstaff.css'



const Add = () => {


const [data,setData] = useState({
    name: "",
    surname:"",
    shop:"",
    ID_number: "",
    Staffpassword:"",
    permision: "Staff"
    
})
const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
}

const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("firstname",data.name)
    formData.append("surname",data.surname)
    formData.append("shopname",data.shop)
    formData.append("IDnumber",data.ID_number)
    formData.append("staffpassword",data.Staffpassword)
    formData.append("permission",data.permision)
    
}
    return (
        <div className='add'>
            <form className = "flex-col" onSubmit={onSubmitHandler}>
                
                <div className = "add-Staff-first-name flex-col">
                    <p>Staff Firstname</p>
                    <input onChange={onChangeHandler}  value={data.name} type= "text" name='firstname' placeholder = 'Type here'/>
                </div>
                <div className = "add-Shopowner-name flex-col">
                    <p>Staff Surname</p>
                    <input onChange={onChangeHandler}  value={data.surname} type= "text" name='surname' placeholder = 'Type here'/>
                </div>
                <div className = "add-Shop-name flex-col">
                    <p>Shop name</p>
                    <input onChange={onChangeHandler}  value={data.shop} type= "text" name='shopname' placeholder = 'Type here'/>
                </div>
                <div className = "add-staffIDnumber flex-col">
                    <p>Staff ID number</p>
                    <input onChange={onChangeHandler}  value={data.ID_number} type= "text" name='IDnumber' placeholder = 'Type here' required/>
                </div>
                <div className = "add-staffpassword flex-col">
                    <p>Default Staff password</p>
                    <input onChange={onChangeHandler}  value={data.Staffpasswordr} type= "text" name='staffpassword' placeholder = 'Type here'/>
                </div>
                <div className='add-staffpermission flex col'>
                        <p>Choose Staff Permission</p>
                        <select name="permision" onChange={onChangeHandler}  >
                            <option value= "Owner">Owner</option>
                            <option value= "Staff">Staff</option>
                        </select>
                    </div>
                
                
                <button type= "submit" className='add-button'>Add</button>
            </form>
            
        </div>
    )
}

export default Add
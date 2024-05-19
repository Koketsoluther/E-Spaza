import React, { useState } from 'react'
import './addstaff.css'
// import { Password } from '@mui/icons-material';



const Add = () => {

const [staffName,setStaffName]= useState('');
const [staffSurname,setStaffSurname]= useState('');
const [shopName,setShopName]= useState('');
const [staffIDnumber,setStaffID]= useState('');
const [staffPassword,setPassword]= useState('');
const [staffPermission,setPermission]= useState('');


const handleStaffNameChange=(event)=>{
    setStaffName(event.target.value);
};
const handleSurnameChange=(event)=>{
    setStaffSurname(event.target.value);
};
const handleShopNameChange=(event)=>{
    setShopName(event.target.value);
};
const handleStaffIDChange=(event)=>{
    setStaffID(event.target.value);
};
const handlePasswordChange=(event)=>{
    setPassword(event.target.value);
};
const handlePermissionChange=(event)=>{
    setPermission(event.target.value);
};


// const [data,setData] = useState({
//     // name: "",
//     // surname:"",
//     // shop:"",
//     // ID_number: "",
//     // Staffpassword:"",
//     // permision: "Staff"
    
// })
// const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData(data => ({...data,[name]:value}))
// }

const onSubmitHandler = async (event) => {
    event.preventDefault();
    // const formData = new FormData();
    // formData.append("firstname",data.name)
    // formData.append("surname",data.surname)
    // formData.append("shopname",data.shop)
    // formData.append("IDnumber",data.ID_number)
    // formData.append("staffpassword",data.Staffpassword)
    // formData.append("permission",data.permision)
    
}
    return (
        <div className='add'>
            <form className = "flex-col" onSubmit={onSubmitHandler}>
                
                <div className = "add-Staff-first-name flex-col">
                    <p>Staff Firstname</p>
                    <input onChange={handleStaffNameChange}  value={staffName} type= "text" name='firstname' placeholder = 'Type here'/>
                </div>
                <div className = "add-Shopowner-name flex-col">
                    <p>Staff Surname</p>
                    <input onChange={handleSurnameChange}  value={staffSurname} type= "text" name='surname' placeholder = 'Type here'/>
                </div>
                <div className = "add-Shop-name flex-col">
                    <p>Shop name</p>
                    <input onChange={handleShopNameChange}  value={shopName} type= "text" name='shopname' placeholder = 'Type here'/>
                </div>
                <div className = "add-staffIDnumber flex-col">
                    <p>Staff ID number</p>
                    <input onChange={handleStaffIDChange}  value={staffIDnumber} type= "text" name='IDnumber' placeholder = 'Type here' required/>
                </div>
                <div className = "add-staffpassword flex-col">
                    <p>Default Staff password</p>
                    <input onChange={handlePasswordChange}  value={staffPassword} type='Password' name='staffpassword' placeholder = 'Type here'/>
                </div>
                <div className='add-staffpermission flex col' value={staffPermission}>
                        <p>Choose Staff Permission</p>
                        <select name="permision" onChange={handlePermissionChange}  >
                            <option value= "Owner">Owner</option>
                            <option value= "Staff">Staff</option>
                        </select>
                    </div>
                
                
                <button type= "submit" className='add-button'>Add</button>
            </form>
            
        </div>
    )
}
// className="signin" onClick={handleClick} onChange={handleChange}>

export default Add
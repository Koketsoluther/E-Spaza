import React, { useState } from 'react'
import './addproduct.css'
import {assets} from '../../assets/assets'
import axios from "axios"
import {toast} from "react-toastify"


const Add = () => {
const url = "http://localhost:4000";
const [image,setImage] = useState(false);
const [productName,setProductName]= useState('');
const [productPrice,setProductPrice]= useState('');
const [productQuantity,setProductQuantity]= useState('');
const [productCategory,setProductCategory]= useState('');

// const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     // setData(data => ({...data,[name]:value}))
// }

const handleProductNameChange=(event)=>{
    setProductName(event.target.value);
};
const handleProductPriceChange=(event)=>{
    setProductPrice(event.target.value);
};
const handleProductQuantityChange=(event)=>{
    setProductQuantity(event.target.value);
};
const handleProductCategoryChange=(event)=>{
    setProductCategory(event.target.value);
};




const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    // formData.append("name",data.NAME)
    // formData.append("Stock",Number(data.STOCK))
    // formData.append("Price",Number(data.PRICE))
    // formData.append("category",data.CATEGORY)
    formData.append("image",image)

    const response = await axios.post(`${url}/api/products/add`,formData);

    if(response.data.success){
        // setData({
        //     name: "",
        //     stock: "",
        //     price:"",
        //     category:"Other" 
        // })
        setImage(false)
        toast.success(response.data.message)
    }
    else{
        toast.error(response.data.message)
    }
}
    return (
        <div className='add'>
            <form className = "flex-col" onSubmit={onSubmitHandler}>
                <div className= "add-img-upload flex col">
                    <p>Upload Image</p>
                    <label htmlFor= 'image'>
                        <img src = {image?URL.createObjectURL(image):assets.upload_area} alt = ""/>
                    </label>
                    <input onChange={(e)=> setImage(e.target.files[0])} type= "file" id = "image" hidden="" required />
                </div>
                <div className = "add-product-name flex-col">
                    <p> Product Name</p>
                    <input onChange={handleProductNameChange}  value={productName} type= "text" name='name' placeholder = 'Type here'/>
                </div>
               
                <div className='add-category-price'>
                    <div className='add-category flex col'>
                        <p>Product Category</p>
                        <select name="category" onChange={handleProductCategoryChange} value={productCategory}  >
                            <option value= "Other">Other</option>
                            <option value= "Drinks">Drinks</option>
                            <option value= "Toiletries">Toiletries</option>
                            <option value= "Food">Food</option>
                          
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Product price</p>
                        <input onChange={handleProductPriceChange}  value={productPrice} type = "Number" name='Price' placeholder = "R0.00"/>
                    </div>
                    <div className='add-price flex-col'>
                        <p>QUANTITY</p>
                        <input onChange={handleProductQuantityChange}  value={productQuantity} type = "Number" name='Stock' placeholder = "0"/>
                    </div>
                </div>
                <button onClick={Add} type= "submit" className='add-button'>Add</button>
            </form>
            
        </div>
    )
}

export default Add
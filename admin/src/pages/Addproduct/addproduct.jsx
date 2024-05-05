import React, { useState } from 'react'
import './addproduct.css'
import {assets} from '../../assets/assets'


const Add = () => {

const [image,setImage] = useState(false);
const [data,setData] = useState({
    name: "",
    description:"",
    price:"",
    category:"Salad"
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
    formData.append("description",data.description)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append("image",image)
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
                    <input onChange={onChangeHandler}  value={data.name} type= "text" name='name' placeholder = 'Type here'/>
                </div>
                <div className ="add-product-description flex-col">
                    <p> Product description</p>
                    <textarea onChange={onChangeHandler}  value={data.description} name='description' row = "6" placeholder='Write content Here' required > </textarea>
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex col'>
                        <p>Product Category</p>
                        <select name="category" onChange={onChangeHandler}  >
                            <option value= "Salad">Salad</option>
                            <option value= "Drinks">Drinks</option>
                            <option value= "Toiletries">Toiletries</option>
                            <option value= "Food">Food</option>
                            <option value= "Dairy Prodcut">Dairy product</option>
                            <option value= "Vegtables">Vegatable</option>
                            <option value= "Hardware">Hardware</option>
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Product price</p>
                        <input onChange={onChangeHandler}  value={data.price} type = "Number" name='Price' placeholder = "R0.00"/>
                    </div>
                </div>
                <button type= "submit" className='add-button'>Add</button>
            </form>
            
        </div>
    )
}

export default Add
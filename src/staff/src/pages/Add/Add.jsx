import React,{ useState} from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
//import { toast } from 'react-toastify';
//import { toast } from 'react-toastify';
//import axios from 'axios'

const Add = () => {

//const url = "http://localhost:4000";
const[image,setImage]=useState(false); // storing the image state variable
const[data,setData]= useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
})

const onChangeHandler =(event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
}
//api call

const onSubmitHandler = async(event) =>{
    event.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name);
    formData.append("description",data.description);
    formData.append("price",Number(data.price));
    formData.append("category",data.category);
    formData.append("image",image);
   // const response = await axios.post(`${url}/api/espaza/add`, formData)

//    if (response.data.success){
//         setData({
//         name:"",
//         description:"",
//         price:"",
//         category:"Salad"

//         })
//         setImage(false)
      // toast.success(response.data.message)
//    }
//    else{
        //toast.error(response.data.message)
//    }
}

// useEffect(()=>{
//     console.log(data)

// },[data])


  return (
    <div className='add'>
    <form className='flex-col' onSubmit={onSubmitHandler}>
    <div className='add-img-upload flex-col'>
        <p>Upload Item Image</p>
        <label htmlFor='image'>
            <img src={image?URL.createObjectURL(image) :assets.upload_area} alt=""/>
        </label>
    <input onChange={(e)=>setImage(e.target.files[0])} type ="file" id="image" hidden required/>
    
    
    </div>
    <div className='add-product-name flex-col'>
    <p>
        Product name
    </p>
    <input onChange={onChangeHandler} value={data.name}  type='text' name='name' placeholder='type here'/>
   
    </div>
        <div className='add-product-description flex-col'>
    <p>
        Product description
    </p>
    <textarea onChange={onChangeHandler} value ={data.description} name='description' id='' cols="30" rows='10' placeholder='type here'></textarea>
   
    </div> 

    <div className='add-category-price'>
    <div className='add-category flex-col'>
    <p>Product category</p>
        <select onChange={onChangeHandler} name='category' className='selection'>
            <option value="Tolietries"></option>
            <option value="Bread"></option>
            <option value="House"></option>
            <option value="Cars"></option>
            <option value="Girls"></option>
            <option value="Money"></option>
            <option value="Money Again"></option>
            <option value="Her"></option>
        </select>

    </div>
    <div className='add-price flex-col'>
    
    <p>
        Product price
    </p>
    <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='R20'/>
    </div>
</div>
    <button type='submit' className='add-btn' >Add</button>

   

    </form>
    </div>
  )
}

export default Add 
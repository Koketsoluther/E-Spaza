import React, { useContext } from 'react'
import './ProductDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ProductItem from '../ProductItem/ProductItem'

const FoodDisplay=({category})=>{
    const {foodData}= useContext(StoreContext)
    return(
        <div className='product-display' id='product-display'>
            <h2>Top products near you</h2>
            <div className='product-display-list'>
                {foodData.map((item,index)=>{
                    console.log(category,item.category);
                    if(category==="All" || category===item.category){
                        return <ProductItem key={index} id={item.id} NAME={item.NAME} PRICE={item.PRICE} IMAGE={item.IMAGE}/>
                    }
                    else{
                        return null;
                    }
                    
                })}

            </div>

        </div>
    )
}

export default FoodDisplay
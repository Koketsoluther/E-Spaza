import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [foodData, setFoodData] = useState([]);
    const [cartItems, setCartItems]= useState({})

    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}));
        }

        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }

    }
    const removeFromCart=(itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }
    /*useEffect(()=>{
        console.log(cartItems);
    },[cartItems])*/

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo= foodData.find((product)=> product.id ===item);
                totalAmount+=itemInfo.PRICE*cartItems[item];
            }


            
        }
        return totalAmount;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://us-central1-e-spazadb.cloudfunctions.net/app/api/items');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setFoodData(data);
            } catch (error) {
                console.error('Error fetching food data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once

    const contextValue = {
        foodData,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
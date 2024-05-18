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

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            console.log(item)
            if(cartItems[item]>0){
                let itemInfo= foodData.find((product)=> product._id ===item);
                totalAmount+=itemInfo.PRICE*cartItems[item];
            }


            
        }
        return totalAmount;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
               
                const response = await fetch("http://localhost:4000/api/products/list");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data)
                setFoodData(data.data);
            } catch (error) {
                console.error('Error fetching food data:', error);
            }
        };

        fetchData();
    }, []);

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
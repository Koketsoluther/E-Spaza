import { createContext, useState, useEffect ,useCallback} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const {user, isAuthenticated} = useAuth0()
    const [foodData, setFoodData] = useState([]);
    const [cartItems, setCartItems]= useState({})

    const loadcartData = useCallback(async () => {
        if (isAuthenticated) {
            const userId = user.sub;
            try {
                const res = await axios.post("https://us-central1-e-spazadb.cloudfunctions.net/func/api/cart/get", { userId });
                console.log(res.data);
                setCartItems(res.data.cartData);
            } catch (error) {
                console.error("Error loading cart data:", error);
            }
        }
    }, [isAuthenticated, user]);

    const addToCart= async (itemId, stock)=>{

        if(!cartItems[itemId]){

            console.log(stock)
            
            if(stock == 0){
                console.log("OUT OF STOCK");
                return
            }
            else{
                setCartItems((prev)=>({...prev,[itemId]:1}));
            }
            
        }
        else{
             console.log(stock)

            if(stock == cartItems[itemId] ){
                console.log("There isn't more stock...")
                return
            }

            else if(stock == 0){
                console.log("OUT OF STOCK");
                return
            }

            else{
                setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
            }

            
        }

        if(isAuthenticated){
            const userId = user.sub
            const res = await axios.post("https://us-central1-e-spazadb.cloudfunctions.net/func/api/cart/add",{itemId,userId})
            console.log(res)
        }
    }

    const removeFromCart= async (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

        if(isAuthenticated){
            const userId = user.sub
            const res = await axios.post("https://us-central1-e-spazadb.cloudfunctions.net/func/api/cart/remove",{itemId,userId})
            console.log(res)
        }
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            console.log(cartItems[item])
            if(cartItems[item]>0){
                
                let itemInfo= foodData.find((product)=> product._id == item);
                
                totalAmount+=itemInfo.PRICE*cartItems[item];
            }


            
        }
        return totalAmount;
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
               
                const response = await fetch("https://us-central1-e-spazadb.cloudfunctions.net/func/api/products/list");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log("skibidi",data)
                setFoodData(data.data);

                await loadcartData()

            } catch (error) {
                console.error('Error fetching food data:', error);
            }
        };

        fetchData();
    }, [isAuthenticated, loadcartData]);

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
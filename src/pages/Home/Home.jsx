import React from "react";
import './Home.css'
import Header from "../../components/Header/Header";
//import ExploreFood from "../../components/ExploreFood/ExploreFood";
import FoodDisplay from "../../components/ProductDisplay/ProductDisplay";

const Home=() =>{
    //const [category, setCategory]= useState("All")
    return(
        <div>
            <Header/>
            <FoodDisplay/>
        </div>
    )
}

export default Home
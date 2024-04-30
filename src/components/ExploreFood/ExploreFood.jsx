import React, { useState, useEffect } from "react";
import './ExploreFood.css';

const ExploreFood = () => {
    const [foodData, setFoodData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const response = await fetch('https://us-central1-e-spazadb.cloudfunctions.net/app/api/items');
                if (!response.ok) {
                    throw new Error('Failed to fetch food data');
                }
                const data = await response.json();
                console.log(data);
                setFoodData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching food data:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchFoodData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="explore-food" id="explore-food">
            <h1>Explore our food</h1>
            <section className="explore-food-list">
                {foodData.map((foodItem, index) => {
                    return(
                        <div key={index} className="explore-food-list-item">
                            <img src={foodItem.IMAGE} alt="" />
                            <p>{foodItem.NAME}</p>
                            <p>R{foodItem.PRICE}</p>

                        </div>
                        
                    )
                })}
                
                    
            </section>
            <hr/>
        </div>
    );
};

export default ExploreFood;
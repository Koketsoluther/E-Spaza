import React, { useState, useEffect } from "react";
import './ExploreFood.css';
const ExploreFood = () => {
    const [foodData, setFoodData] = useState([]);
    const [filteredFoodData, setFilteredFoodData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
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

    useEffect(() => {
        // Filter food data based on search query
        const filteredData = foodData.filter(foodItem =>
            foodItem.NAME.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredFoodData(filteredData);
    }, [foodData, searchQuery]);

    const handleSearchInputChange = event => {
        setSearchQuery(event.target.value);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="explore-food" id="explore-food" data-testid="explore-food-component">
            <h1>Explore our food</h1>
            <input
                type="text"
                placeholder="Search for product items"
                value={searchQuery}
                onChange={handleSearchInputChange}
            />
            <section className="explore-food-list">
                {filteredFoodData.map((foodItem, index) => {
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
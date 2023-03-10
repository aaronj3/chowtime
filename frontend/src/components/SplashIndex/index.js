import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants , fetchRestaurants } from '../../store/restaurants';
import RestaurantIndexItem from '../RestaurantIndexItem';
import "./SplashShow.css"

function SplashIndex() {
    const dispatch = useDispatch();

    const restaurants = useSelector(getRestaurants);

    useEffect(()=>{
        dispatch(fetchRestaurants())
    }, [dispatch])


    return (
        <>
        <div className="restaurant-cards-container">
            <ul className="restaurant-card-div">
                {restaurants.map(restaurant=> <RestaurantIndexItem key={restaurant.id} restaurant={restaurant}/>)}
            </ul>
        </div>
        </>
    )
}

export default SplashIndex;

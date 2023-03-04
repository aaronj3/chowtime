import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants , fetchRestaurants } from '../../store/restaurants';
import RestaurantIndexItem from '../RestaurantIndexItem';

function SplashIndex() {
    const dispatch = useDispatch();

    const restaurants = useSelector(getRestaurants);

    useEffect(()=>{
        dispatch(fetchRestaurants())
    }, [dispatch])


    return (
        <>
            <ul>
                {restaurants.map(restaurant=> <RestaurantIndexItem key={restaurant.id} restaurant={restaurant}/>)}
            </ul>
        </>
    )
}

export default SplashIndex;

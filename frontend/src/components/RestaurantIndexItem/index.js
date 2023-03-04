import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurant, fetchRestaurant } from '../../store/restaurants';


function RestaurantIndexItem({restaurant}) {
    const dispatch = useDispatch();
    const sample_image = 'https://lh3.googleusercontent.com/p/AF1QipM0EwA3t1SWeL05ZhldZQWsY1Ri4a69V4b5Vhfc=s1360-w1360-h1020'



    return (
        <Link key={restaurant.id} to={`/restaurants/${restaurant.id}`}>
            <div>
                <img src={sample_image} width="300" height="300"/>
                <h3>{restaurant.name}</h3>
                <p>{restaurant.address}</p>
            </div>
        </Link>
    )
}

export default RestaurantIndexItem;

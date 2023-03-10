import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurant, fetchRestaurant } from '../../store/restaurants';


function RestaurantIndexItem({restaurant}) {
    const dispatch = useDispatch();
    console.log(restaurant)
    // const thumbnail = restaurant;



    return (
        <Link key={restaurant.id} to={`/restaurants/${restaurant.id}`}>
            <div>
                <img src={restaurant.photos[1].url} width="300" height="300"/>

                <h3>{restaurant.name}</h3>
                {/* <p>{restaurant.address}</p> */}
            </div>
        </Link>
    )
}

export default RestaurantIndexItem;

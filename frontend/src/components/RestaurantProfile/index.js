import { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurant, getRestaurant } from "../../store/restaurants";


function RestaurantProfile(){
    const dispatch = useDispatch();
    const { restaurantId } = useParams();
    const restaurant = useSelector(getRestaurant(restaurantId));

    useEffect(()=>{
        dispatch(fetchRestaurant(restaurantId))
    }, [dispatch, restaurantId])

    return (
        <>
            <div className="restaurant-profile-main-container">
                {/* Restaurant Banner Component  */}
                <div className="restaurant-profile-container-1">
                    <section className="tab-container">
                        <nav className="navi-tabs">
                            <ul>
                                <li>
                                    <button className="tab-button">Overview</button>
                                </li>

                                <li>
                                    <button className="tab-button">Popular Dishes</button>
                                </li>

                                <li>
                                    <button className="tab-button">Photos</button>
                                </li>

                                <li>
                                    <button className="tab-button">Menu</button>
                                </li>

                                <li>
                                    <button className="tab-button">Reviews</button>
                                </li>
                            </ul>
                        </nav>
                    </section>

                    <section>
                        <h1 className="restaurant-name">
                            {restaurant.name}
                        </h1>
                        <div className="restaurant-overview-header">
                            <div>Rating placeholder</div>
                            <div># of reviews placeholder</div>
                            <div>{restaurant.price_range}</div>
                            <div>{restaurant.cuisine}</div>
                        </div>

                        <div className="restaurant-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>

                    </section>

                    <section className="popular-dishes-container">
                        <div className="popular-dishes-header"><h2>Popular Dishes</h2></div>
                        <div className="popular-dishes-cards">Insert popular dishes cards here</div>
                    </section>

                    <section className="photos-container">
                        <div className="popular-dishes-header"><h2># of Photos</h2></div>
                        <div className="popular-dishes-cards">Insert grid of photos</div>
                    </section>

                    <section className="menu-review-container" id="menu-container">
                        <div className="popular-dishes-header"><h2>Menu</h2></div>
                        <div className="popular-dishes-cards">{restaurant.menu}</div>
                    </section>

                    <section className="menu-review container" id="review-container">
                        <div className="popular-dishes-header"><h2>What people are saying</h2></div>
                        <div className="popular-dishes-cards">Insert reviews</div>
                    </section>


                </div>

                <div className="restaurant-profile-container-2">


                </div>



            </div>

        </>
    )
}

export default RestaurantProfile;

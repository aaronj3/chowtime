import { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurant, getRestaurant } from "../../store/restaurants";
import RestaurantReviews from "../RestaurantReviews";
import "./RestaurantProfile.css"


function RestaurantProfile(){
    const dispatch = useDispatch();
    const { restaurantId } = useParams();
    const restaurant = useSelector(getRestaurant(restaurantId));
    console.log(restaurant)


    useEffect(()=>{
        dispatch(fetchRestaurant(restaurantId))
    }, [dispatch, restaurantId])

    if (!restaurant) {
        return null
    }


    return (
        <>
            <div className="restaurant-profile-main-container">
                {/* Restaurant Banner Component  */}
                <div className="restaurant-profile-container-1">
                    <section className="tab-container">
                        <nav className="navi-tabs">
                            <ol className="tabs">
                                <li className="tab" id="overview-tab">
                                    <button className="tab-button" >Overview</button>
                                </li>

                                <li className="tab">
                                    <button className="tab-button">Popular Dishes</button>
                                </li>

                                <li className="tab">
                                    <button className="tab-button">Photos</button>
                                </li>

                                <li className="tab">
                                    <button className="tab-button">Menu</button>
                                </li>

                                <li className="tab">
                                    <button className="tab-button">Reviews</button>
                                </li>
                            </ol>
                        </nav>
                    </section>

                    <section>
                        <h1 className="restaurant-name">
                            {restaurant.name}
                        </h1>

                        <div className="restaurant-overview-header">
                            <div>
                                <span>

                                </span>
                                <span>Rating placeholder</span>
                            </div>

                            <div className="overview-header-item">
                                <span className="icon-container">
                                    <svg viewBox="0 0 24 24" xmln="http://www.w3.org/2000/svg" focusable="false">
                                        <g fill="none">
                                            <path d="M19,4 L5,4 C3.8954305,4 3,4.8954305 3,6 L3,15 C3,16.1045695 3.8954305,17 5,17 L11,17 L15.36,20.63 C15.6583354,20.8784924 16.0735425,20.9318337 16.4250008,20.7668198 C16.776459,20.6018059 17.0006314,20.2482681 17,19.86 L17,17 L19,17 C20.1045695,17 21,16.1045695 21,15 L21,6 C21,4.8954305 20.1045695,4 19,4 Z M19,15 L15,15 L15,17.73 L11.72,15 L5,15 L5,6 L19,6 L19,15 Z" fill="#2D333F" ></path>
                                        </g>
                                    </svg>

                                </span>
                                {restaurant.reviews && (<span>{restaurant.reviews.length} Reviews</span>)}
                                {/* <span>{restaurant.reviews.length} Reviews</span> */}
                            </div>

                            <div className="overview-header-item">
                                <span className="icon-container">
                                    <svg viewBox="0 0 24 24" xmln="http://www.w3.org/2000/svg" focusable="false">
                                        <g fill="none">
                                            <path d="M20,15 L20,9 L18.5,9 C18.2238576,9 18,8.77614237 18,8.5 L18,7 L6,7 L6,8.5 C6,8.77614237 5.77614237,9 5.5,9 L4,9 L4,15 L5.5,15 C5.77614237,15 6,15.2238576 6,15.5 L6,17 L18,17 L18,15.5 C18,15.2238576 18.2238576,15 18.5,15 L20,15 Z M4,5 L20,5 C21.1045695,5 22,5.8954305 22,7 L22,17 C22,18.1045695 21.1045695,19 20,19 L4,19 C2.8954305,19 2,18.1045695 2,17 L2,7 C2,5.8954305 2.8954305,5 4,5 Z M12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 Z" fill="#2D333F"></path>
                                        </g>
                                    </svg>

                                </span>
                                <span>{restaurant.priceRange}</span>
                            </div>

                            <div className="overview-header-item">
                                <span className="icon-container">
                                    <svg viewBox="0 0 24 24" xmln="http://www.w3.org/2000/svg" focusable="false">
                                        <g fill="none">
                                            <path d="M11,2 C12.1045695,2 13,2.8954305 13,4 L13,11 C13,12.1045695 12.1045695,13 11,13 L10,13 L10,21 C10,21.5522847 9.55228475,22 9,22 L8,22 C7.44771525,22 7,21.5522847 7,21 L7,13 L6,13 C4.8954305,13 4,12.1045695 4,11 L4,4 C4,2.8954305 4.8954305,2 6,2 L11,2 Z M11,11 L11,4 L10,4 L10,8.5 C10,8.77614237 9.77614237,9 9.5,9 C9.22385763,9 9,8.77614237 9,8.5 L9,4 L8,4 L8,8.5 C8,8.77614237 7.77614237,9 7.5,9 C7.22385763,9 7,8.77614237 7,8.5 L7,4 L6,4 L6,11 L11,11 Z M19.45,2 C19.7537566,2 20,2.24624339 20,2.55 L20,21 C20,21.5522847 19.5522847,22 19,22 L18,22 C17.4477153,22 17,21.5522847 17,21 L17,17 L16,17 C14.8954305,17 14,16.1045695 14,15 L14,7.45 C14,4.44004811 16.4400481,2 19.45,2 Z M16,15 L18,15 L18,4.32 C16.7823465,4.88673047 16.0026709,6.10692278 16,7.45 L16,15 Z" fill="#2D333F"></path>
                                        </g>
                                    </svg>
                                </span>
                                <span>{restaurant.cuisine}</span>
                            </div>
                        </div>


                        <div className="restaurant-description">
                        {restaurant.description}
                        </div>

                    </section>

                    <section className="profile-section-container">
                        <header className="section-header">
                            <div className="popular-dishes-header"><h2 id="popular-dishes" className="header-text">Popular Dishes</h2></div>
                        </header>
                        <div className="popular-dishes-cards">Insert popular dishes cards here</div>
                    </section>

                    <section className="profile-section-container">
                        <header className="section-header">
                            <div className="popular-dishes-header"><h2 className="header-text"># of Photos</h2></div>
                        </header>

                        <div className="photo-grid">Insert grid of photos</div>
                    </section>

                    <section className="profile-section-container" id="menu-container">
                        <header className="section-header">
                            <div className="popular-dishes-header"><h2 className="header-text">Menu</h2></div>
                        </header>

                        <div className="popular-dishes-cards">{restaurant.menu}</div>
                    </section>

                    <section className="profile-section-container" id="reviews-container">
                        <RestaurantReviews/>
                    </section>
                </div>

                <div className="restaurant-profile-container-2">
                </div>

            </div>
        </>
    )
}

export default RestaurantProfile;

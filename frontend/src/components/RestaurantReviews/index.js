import { useState , useEffect } from "react";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import "./RestaurantReviews.css"
import ReviewForm from "../ReviewForm";
import RestaurantReview from "../RestaurantReview";
import { getReviews, fetchReviews } from "../../store/reviews";


function RestaurantReviews({restaurantReviews}) {
    const dispatch = useDispatch();
    const reviews = useSelector(getReviews);
    const {restaurantId} = useParams();

    useEffect(()=>{
        dispatch(fetchReviews(restaurantId))
    }, [dispatch, reviews])


    if (!restaurantReviews) {
        return null
    }

    return (
        <>
            <header className="profile-section-container">
                <header className="section-header">
                    <div className="review-header">
                        <h2 className="header-text">What {restaurantReviews.length} people are saying</h2>
                    </div>
                </header>

            </header>
            <section className="reviews-summary">
                <h3 className="">Overall ratings and reviews</h3>
                <article className="reviews-summary-ratings">
                    <p>Reviews can only be made by diners who have eaten at this restaurant</p>
                    <section className="reviews-stars-and-text">
                        <div className="stars">
                            <div className="star">Star</div>
                            <div className="star">Star</div>
                            <div className="star">Star</div>
                            <div className="star">Star</div>
                            <div className="star">Star</div>
                        </div>
                        {"*Average total rating*"} based on recent ratings
                    </section>
                </article>
                <ul className="reviews-ratings-list">
                    <li>Food average rating</li>
                    <li>Service average rating</li>
                    <li>Ambience average rating</li>
                    <li>Value average rating</li>
                </ul>
                <article className="review-histogram-container">
                    <ol className="reviews-histogram">
                        <li>
                            <label>
                                5
                            </label>
                            <meter id="meter-5" className="meter" min="0" max="100">
                                <div className="meter-rating"></div>
                            </meter>
                        </li>

                        <li>
                            <label>
                                4
                            </label>
                            <meter id="meter-4" className="meter" min="0" max="100">
                                <div className="meter-rating"></div>
                            </meter>
                        </li>

                        <li>
                            <label>
                                3
                            </label>
                            <meter id="meter-3" className="meter" min="0" max="100">
                                <div className="meter-rating"></div>
                            </meter>
                        </li>

                        <li>
                            <label>
                                2
                            </label>
                            <meter id="meter-2" className="meter" min="0" max="100">
                                <div className="meter-rating"></div>
                            </meter>
                        </li>

                        <li>
                            <label>
                                1
                            </label>
                            <meter id="meter-1" className="meter" min="0" max="100">
                                <div className="meter-rating"></div>
                            </meter>
                        </li>
                    </ol>

                    <br></br>

                    <ReviewForm/>

                    <br></br>

                    <ol className="reviews-list" id="restProfileReviewsContent">
                        {restaurantReviews.map(review=><RestaurantReview key={review.id} review={review}/>)}
                    </ol>
                </article>
            </section>

        </>





        )
}

export default RestaurantReviews

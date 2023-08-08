import "./ReviewForm.css"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createReview } from "../../store/reviews";
import { useParams } from "react-router-dom";


function ReviewForm({setShowReviewForm}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const {restaurantId} = useParams();
    const [body, setBody] = useState("");
    const [overallRating, setOverallRating] = useState("none");
    const [foodRating, setFoodRating] = useState("none");
    const [serviceRating, setServiceRating] = useState("none");
    const [ambienceRating, setAmbienceRating] = useState("none");
    const [errors, setErrors] = useState([]);


    const handleOverallRatingChange = (e) => {
        setOverallRating(e.target.value)
    }

    const handleFoodRatingChange = (e) => {
        setFoodRating(e.target.value)
    }

    const handleServiceRatingChange = (e) => {
        setServiceRating(e.target.value)
    }

    const handleAmbienceRatingChange = (e) => {
        setAmbienceRating(e.target.value)
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (overallRating === "none"|| foodRating === "none"|| serviceRating === "none" || ambienceRating === "none" || !body || !overallRating || !foodRating || !serviceRating || !ambienceRating) {
            setErrors(["Must fill out all fields"]);
        } else {
            let newReview = {
                author_id: sessionUser.id,
                restaurant_id: restaurantId,
                overall: overallRating,
                food: foodRating,
                service: serviceRating,
                ambience: ambienceRating,
                body: body
            }
            dispatch(createReview(newReview))
            setShowReviewForm(false)
        }
    }


    return (
        <div>
            <div>
                <h2 style={{fontSize: "36px"}}>Leave a review</h2>
            </div>

            <form onSubmit={(handleSubmit)}>
                <ul>
                    {errors.map(error => <li key={error} className="error-messages">{error}</li>)}
                </ul>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", marginBottom: "18px", marginTop: "24px"}} >
                <label htmlFor="overall-rating">Overall</label>
                <div className="overall-rating">
                    <select onChange={handleOverallRatingChange} value={overallRating}>
                        <option value="none" disabled>--</option>
                        <option value = "1" name="overall-rating">1</option>
                        <option value = "2" name="overall-rating">2</option>
                        <option value = "3" name="overall-rating">3</option>
                        <option value = "4" name="overall-rating">4</option>
                        <option value = "5" name="overall-rating">5</option>
                    </select>
                </div>

                <label htmlFor="food-rating">Food</label>
                <div className="food-rating">
                    <select onChange={handleFoodRatingChange} value={foodRating}>
                        <option value="none" disabled>--</option>
                        <option value = "1" name="food-rating">1</option>
                        <option value = "2" name="food-rating">2</option>
                        <option value = "3" name="food-rating">3</option>
                        <option value = "4" name="food-rating">4</option>
                        <option value = "5" name="food-rating">5</option>
                    </select>
                </div>

                <label htmlFor="service-rating">Service</label>
                <div className="service-rating">
                    <select onChange={handleServiceRatingChange} value={serviceRating}>
                        <option value="none" disabled>--</option>
                        <option value = "1">1</option>
                        <option value = "2">2</option>
                        <option value = "3">3</option>
                        <option value = "4">4</option>
                        <option value = "5">5</option>
                    </select>

                </div>

                <label htmlFor="ambience-rating">Ambience</label>
                    <div className="ambience-rating">
                        <select onChange={handleAmbienceRatingChange} value={ambienceRating}>
                            <option value="none" disabled>--</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                        </select>
                    </div>
                </div>

                <label>Comment
                    <br></br>
                    <textarea type="textarea" style={{height: "100px", width: "100%", marginTop: "8px", verticalAlign: "top"}} value={body} onChange={(e) => {setBody(e.target.value)}} ></textarea>
                </label>

                <button className="modal-button" style={{marginTop: "36px"}} type="submit">Submit</button>
            </form>
        </div>
        )
}

export default ReviewForm

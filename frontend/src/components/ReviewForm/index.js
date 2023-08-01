import "./ReviewForm.css"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createReview } from "../../store/reviews";
import { useParams } from "react-router-dom";



function ReviewForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const {restaurantId} = useParams();
    const [body, setBody] = useState("");
    const [overallRating, setOverallRating] = useState();
    const [foodRating, setFoodRating] = useState();
    const [serviceRating, setServiceRating] = useState();
    const [ambienceRating, setAmbienceRating] = useState();
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
        if (!body || !overallRating || !foodRating || !serviceRating || !ambienceRating) {
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
        }
    }


    return (
        <div>
            <form onSubmit={(handleSubmit)}>
                <ul>
                    {errors.map(error => <li key={error} className="error-messages">{error}</li>)}
                </ul>
                <label htmlFor="overall-rating">Overall</label>
                <div className="overall-rating">
                    <select>
                        <option value = "1" name="overall-rating"  onChange={handleOverallRatingChange}>1</option>
                        <option value = "2" name="overall-rating"  onChange={handleOverallRatingChange}>2</option>
                        <option value = "3" name="overall-rating"  onChange={handleOverallRatingChange}>3</option>
                        <option value = "4" name="overall-rating"  onChange={handleOverallRatingChange}>4</option>
                        <option value = "5" name="overall-rating"  onChange={handleOverallRatingChange}>5</option>
                    </select>

                </div>

                <label htmlFor="food-rating">Food</label>
                <div className="food-rating">
                    <select>
                        <option value = "1" name="food-rating" onChange={handleFoodRatingChange}>1</option>
                        <option value = "2" name="food-rating" onChange={handleFoodRatingChange}>2</option>
                        <option value = "3" name="food-rating" onChange={handleFoodRatingChange}>3</option>
                        <option value = "4" name="food-rating" onChange={handleFoodRatingChange}>4</option>
                        <option value = "5" name="food-rating" onChange={handleFoodRatingChange}>5</option>
                    </select>
                </div>

                <label htmlFor="service-rating">Service</label>
                <div className="service-rating">
                    <select>
                        <option value = "1" onChange={handleServiceRatingChange}>1</option>
                        <option value = "2" onChange={handleServiceRatingChange}>2</option>
                        <option value = "3" onChange={handleServiceRatingChange}>3</option>
                        <option value = "4" onChange={handleServiceRatingChange}>4</option>
                        <option value = "5" onChange={handleServiceRatingChange}>5</option>
                    </select>

                </div>

                <label htmlFor="ambience-rating">Ambience</label>
                <div className="ambience-rating">
                    <select>
                        <option value = "1" onChange={handleAmbienceRatingChange}>1</option>
                        <option value = "2" onChange={handleAmbienceRatingChange}>2</option>
                        <option value = "3" onChange={handleAmbienceRatingChange}>3</option>
                        <option value = "4" onChange={handleAmbienceRatingChange}>4</option>
                        <option value = "5" onChange={handleAmbienceRatingChange}>5</option>
                    </select>
                </div>

                <label>Body
                    <input type="textarea" value={body} onChange={(e) => {setBody(e.target.value)}} ></input>
                </label>

                <button>Submit</button>
            </form>

        </div>
        )
}

export default ReviewForm

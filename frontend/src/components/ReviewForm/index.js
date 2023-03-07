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
            console.log("is this working")
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
                    <input type="radio" name="overall-rating" value="1" onChange={handleOverallRatingChange}></input>
                    <input type="radio" name="overall-rating" value="2" onChange={handleOverallRatingChange}></input>
                    <input type="radio" name="overall-rating" value="3" onChange={handleOverallRatingChange}></input>
                    <input type="radio" name="overall-rating" value="4" onChange={handleOverallRatingChange}></input>
                    <input type="radio" name="overall-rating" value="5" onChange={handleOverallRatingChange}></input>
                </div>

                <label htmlFor="food-rating">Food</label>
                <div className="food-rating">
                    <input type="radio" name="food-rating" value="1" onChange={handleFoodRatingChange}></input>
                    <input type="radio" name="food-rating" value="2" onChange={handleFoodRatingChange}></input>
                    <input type="radio" name="food-rating" value="3" onChange={handleFoodRatingChange}></input>
                    <input type="radio" name="food-rating" value="4" onChange={handleFoodRatingChange}></input>
                    <input type="radio" name="food-rating" value="5" onChange={handleFoodRatingChange}></input>
                </div>

                <label htmlFor="service-rating">Service</label>
                <div className="service-rating">
                    <input type="radio" name="service-rating" value="1" onChange={handleServiceRatingChange}></input>
                    <input type="radio" name="service-rating" value="2" onChange={handleServiceRatingChange}></input>
                    <input type="radio" name="service-rating" value="3" onChange={handleServiceRatingChange}></input>
                    <input type="radio" name="service-rating" value="4" onChange={handleServiceRatingChange}></input>
                    <input type="radio" name="service-rating" value="5" onChange={handleServiceRatingChange}></input>
                </div>

                <label htmlFor="ambience-rating">Ambience</label>
                <div className="ambience-rating">
                    <input type="radio" name="ambience-rating" value="1" onChange={handleAmbienceRatingChange}></input>
                    <input type="radio" name="ambience-rating" value="2" onChange={handleAmbienceRatingChange}></input>
                    <input type="radio" name="ambience-rating" value="3" onChange={handleAmbienceRatingChange}></input>
                    <input type="radio" name="ambience-rating" value="4" onChange={handleAmbienceRatingChange}></input>
                    <input type="radio" name="ambience-rating" value="5" onChange={handleAmbienceRatingChange}></input>
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

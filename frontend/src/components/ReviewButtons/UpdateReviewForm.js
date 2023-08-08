import { useDispatch } from "react-redux";
import { updateReview } from "../../store/reviews";
import { useState } from "react";

function UpdateReviewForm({ review , setUpdateShowModal}) {
    const dispatch = useDispatch();

    const [body, setBody] = useState(review.body);
    const [overallRating, setOverallRating] = useState(review.overall);
    const [foodRating, setFoodRating] = useState(review.food);
    const [serviceRating, setServiceRating] = useState(review.service);
    const [ambienceRating, setAmbienceRating] = useState(review.ambience);
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

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        if (!body || !overallRating || !foodRating || !serviceRating || !ambienceRating) {
            setErrors(["Must fill out all fields"]);
        } else {
            let newReview = {
                ...review,
                overall: overallRating,
                food: foodRating,
                service: serviceRating,
                ambience: ambienceRating,
                body: body
            }
            dispatch(updateReview(newReview))
            setUpdateShowModal(false);
        }
    }

    return (
        <div>
            <div>
                <h2 style={{fontSize: "36px"}}>Leave a review</h2>
            </div>

            <form onSubmit={(handleUpdateSubmit)}>
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

export default UpdateReviewForm

import "./RestaurantReview.css"

function RestaurantReview({review}){
    console.log(review)

    return (
        <li className="review-container">
            <section className="reviewer-container">
                <div className="reviewer-avatar">??</div>
                <p className="reviewer-detail">Reviewer name</p>
                <p className="reviewer-detail">Reviewer geography</p>
                <div className="reviewer-detail"># of reviews by reviewer</div>
            </section>
            <section className="review-body-container">
                <section>
                    <div></div>
                    <p></p>
                </section>
                <span className="review-score-category">Overall</span>
                <span className="review-score">{review.overall}</span>
                <span className="review-score-category">Food</span>
                <span className="review-score">{review.food}</span>
                <span className="review-score-category">Service</span>
                <span className="review-score">{review.service}</span>
                <span className="review-score-category">Ambience</span>
                <span className="review-score">{review.ambience}</span>

                <div>
                    <span>
                        {review.body}
                    </span>
                </div>
            </section>
        </li>
        )
}

export default RestaurantReview;

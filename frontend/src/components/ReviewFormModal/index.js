import { Modal } from "../../context/Modal"
import ReviewForm from "../ReviewForm"
import { useState } from "react"

function ReviewFormModal () {
    const [showReviewForm, setShowReviewForm] = useState(false);

    return (
        <>
        <button style={{padding: "8px 16px 8px 16px" , fontSize: "16px",backgroundColor: "#da3743", color: "white", borderRadius: "2px", border: "30px"}} onClick={()=> setShowReviewForm(true)}>Write a review</button>
        {showReviewForm && (

            <Modal className="modal" onClose={()=> setShowReviewForm(false)}>
                <div class="review-form">
                    <ReviewForm setShowReviewForm={setShowReviewForm}/>
                </div>
            </Modal>
            )}
        </>
    )
}

export default ReviewFormModal

import { Modal } from "../../context/Modal"
import ReviewForm from "../ReviewForm"
import { useState } from "react"

function ReviewFormModal () {
    const [showReviewForm, setShowReviewForm] = useState(false);

    return (
        <>
        <button onClick={()=> setShowReviewForm(true)}>Write a review</button>
        {showReviewForm && (
            <Modal className="modal" onClose={()=> setShowReviewForm(false)}>
                <ReviewForm setShowReviewForm={setShowReviewForm}/>
            </Modal>
            )}
        </>
    )
}

export default ReviewFormModal

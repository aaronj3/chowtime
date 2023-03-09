import "./ReviewButton.css"
import { useDispatch, useSelector } from "react-redux"
import { deleteReview } from "../../store/reviews";
import { Modal } from "../../context/Modal";
import { useState } from "react";
import DeleteReviewForm from "./DeleteReviewForm";
import UpdateReviewForm from "./UpdateReviewForm";


function ReviewButton ({review}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [updateModalShow, setUpdateShowModal] = useState(false);
    if (!sessionUser) return
    if (review.authorId !== sessionUser.id) return


    return (
        <div>
            <button onClick={() => setDeleteModalShow(true)}>Delete</button>
            {deleteModalShow && (
                <Modal onClose={() => setDeleteModalShow(false)}>
                    <DeleteReviewForm review={review} setDeleteModalShow={setDeleteModalShow}/>
                </Modal>
                )}

            <button onClick={() => setUpdateShowModal(true)}>Update</button>
            {updateModalShow && (
                <Modal onClose={() => setUpdateShowModal(false)}>
                    <UpdateReviewForm review={review} setUpdateShowModal={setUpdateShowModal}/>
                </Modal>
                )}
        </div>

        )
}

export default ReviewButton;

import { useDispatch } from "react-redux";
import { deleteReview } from "../../store/reviews";

function DeleteReviewForm({ review , setDeleteModalShow}) {
    const dispatch = useDispatch();

    const handleDeleteButtonClick = (e) => {
        e.preventDefault();
        dispatch(deleteReview(review.id))
        setDeleteModalShow(false);
    }

    return (
        <div>
            <button onClick={() => {setDeleteModalShow(false)}}>Nevermind</button>
            <button onClick={(handleDeleteButtonClick)}>Delete</button>
        </div>
        )
}

export default DeleteReviewForm

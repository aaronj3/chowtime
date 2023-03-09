import "./UserProfile.css"
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCurrentUserReviews } from "../../store/session";
import RestaurantReview from "../RestaurantReview";


function UserProfile() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const reviews = useSelector(state => Object.values(state.reviews))


    useEffect(()=> {
        dispatch(fetchCurrentUserReviews())
    }
    , [ dispatch, sessionUser ])

    return (
        <>
            <div className="profile-container">
                <header className="page-header" >
                    <div className="user-name-container">
                        <h1 className="user-name">{sessionUser.firstName} {sessionUser.lastName}</h1>
                    </div>
                </header>

                <div className="profile-index-container">
                    <div className="profile-index-subcontainer">
                        <div className="content-container">
                            <h1>Points</h1>
                        </div>

                        <div className="content-container">
                            <h1>Upcoming reservations</h1>
                        </div>

                        <div className="content-container">
                            <h1>Past reservations</h1>
                        </div>

                        <div className="content-container">
                            <h1>Your reviews</h1>
                            <ol>
                                {reviews.map(review=><RestaurantReview key={review.id} review={review}/>)}
                            </ol>



                        </div>
                    </div>
                </div>
            </div>

        </>
        )

}

export default UserProfile;

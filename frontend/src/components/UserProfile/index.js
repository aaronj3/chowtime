import "./UserProfile.css"
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";


function UserProfile() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)

    useEffect(()=> {
        // dispatch get user data
    }
    , [ dispatch, sessionUser])



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
                        <div>
                            <h1>Upcoming reservations</h1>
                        </div>
                        <div>
                            <h1>Your reviews</h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
        )

}

export default UserProfile;

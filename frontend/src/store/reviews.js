import csrfFetch from './csrf';

export const RECEIVE_REVIEWS = "reviews/receive"
export const RECEIVE_REVIEW = "review/receive"
export const CLEAR_REVIEWS = "reviews/clear"

const receiveReviews = (payload) => (
    {
        type: RECEIVE_REVIEWS,
        payload
    }
);

const receiveReview = (payload) => (
    {
        type: RECEIVE_REVIEW,
        payload
    }
);

const clearReviews = () => (
    {
        type: CLEAR_REVIEWS
    }
);

export const getReviews = (state) => (
    state.reviews ? Object.values(state.reviews) : []
)

export const getReview = (reviewId) => (state) => (
    state.reviews ? state.reviews[reviewId] : null
)

export const fetchReviews = (restaurant_id) => async dispatch => {
    const response = await csrfFetch(`/api/reviews`)
    if (response.ok) {
        const reviews = await response.json()
        dispatch(receiveReviews(reviews))
    }
}

export const fetchReview = (review_id) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${review_id}`)
    if (response.ok) {
        const review = await response.json()
        dispatch(receiveReview(review))
    }
}

export default function reviewReducer(oldState = {}, action) {
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.payload.reviews
        case RECEIVE_REVIEW:
            let newState = {...oldState}
            return {...oldState, [action.review.id] : action.review}
        case CLEAR_REVIEWS:
            return {};
        default:
            return oldState;
    }
}

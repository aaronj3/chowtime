import csrfFetch from './csrf';
import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT } from './restaurants';
import { RECEIVE_CURRENT_USER_REVIEWS } from './session';

export const RECEIVE_REVIEWS = "reviews/receive"
export const RECEIVE_REVIEW = "review/receive"
export const REMOVE_REVIEW = "review/remove"
export const CLEAR_REVIEWS = "reviews/clear"

const receiveReviews = (payload) => (
    {
        type: RECEIVE_REVIEWS,
        payload
    }
);

const receiveReview = (review) => (
    {
        type: RECEIVE_REVIEW,
        review
    }
);

const removeReview = (payload) => (
    {
        type: REMOVE_REVIEW,
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


export const fetchReview = (review_id) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${review_id}`)
    if (response.ok) {
        const review = await response.json()
        dispatch(receiveReview(review))
    }
}

export const createReview = (review) => async dispatch => {
    const response = await csrfFetch(`/api/reviews`, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(review)
    })
    if (response.ok) {
        const review = await response.json()
        dispatch(receiveReview(review))
    }
}

export const updateReview = (review) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: "PATCH",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(review)
    })
    if (response.ok) {
        const review = await response.json()
        dispatch(receiveReview(review))
    }
}

export const deleteReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    });
    if (response.ok) {
        dispatch(removeReview(reviewId))
    }
}

export default function reviewReducer(oldState = {}, action) {
    switch (action.type) {
        case RECEIVE_RESTAURANT:
            return action.reviews
        case RECEIVE_CURRENT_USER_REVIEWS:
            return action.payload.reviews
        case RECEIVE_REVIEW:
            return {...oldState, [action.review.id] : action.review}
        case REMOVE_REVIEW:
            let newState = {...oldState}
            delete newState[action.payload.reviewId]
            return newState
        case CLEAR_REVIEWS:
            return {};
        default:
            return oldState;
    }
}

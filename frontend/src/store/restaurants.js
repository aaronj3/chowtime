export const RECEIVE_RESTAURANTS = "restaurants/receive"
export const RECEIVE_RESTAURANT = "restaurant/receive"

const receiveRestaurants = (payload) => (
    {
        type: RECEIVE_RESTAURANTS,
        payload
    });

const receiveRestaurant = (restaurant) => (
    {
        type: RECEIVE_RESTAURANT,
        restaurant
    });

export const getRestaurants = (state) => (
    state.restaurants ? Object.values(state.restaurants) : []
    )

export const getRestaurant = (restaurantId) => (state) => (
    state.restaurants ? state.restaurants[restaurantId] : null
)


export const fetchRestaurants = () => async dispatch => {
    const response = await fetch('/api/restaurants')
    if (response.ok) {
        const restaurants = await response.json();
        dispatch(receiveRestaurants(restaurants))
    }
}

export const fetchRestaurant = (restaurantId) => async dispatch => {
    const response = await fetch(`/api/restaurants/${restaurantId}`)
    if (response.ok) {
        const restaurant = await response.json();
        dispatch(receiveRestaurant(restaurant))
    }
}

export default function restaurantsReducer(oldState = {}, action) {
    switch (action.type) {
        case RECEIVE_RESTAURANTS:
            // return {...action.payloads.restaurants}
            return action.payload.restaurants
        case RECEIVE_RESTAURANT:
            let newState = {...oldState}
            return {...newState, [action.restaurant.id] : action.restaurant}
        default:
            return oldState;
    }
}

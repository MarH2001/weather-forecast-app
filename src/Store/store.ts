import { createStore } from "redux";

const initialState = {
    weatherData: null
}

function handleState(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_WEATHER':
            return {
                ...state,
                weatherData: action.payload
            }
        default:
            return state;
    }
}

const store = createStore(handleState);

export default store;
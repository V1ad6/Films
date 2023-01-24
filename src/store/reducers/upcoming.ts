import { UpcomingAction, UpcomingActionTypes, UpcomingState } from "../../types/upcoming"

const initialState: UpcomingState = {
    films: [],
    error: null,
    loading: true,
}

export const upcomingReducer = (state = initialState, action: UpcomingAction) => {
    switch(action.type) {
        case UpcomingActionTypes.GET_FILMS:
            return { films: [], error: null, loading: true }
        case UpcomingActionTypes.GET_FILMS_SUCCESS: 
            return { films: action.payload, error: null, loading: false }
        case UpcomingActionTypes.GET_FILMS_ERROR:
            return { films: [], error: action.payload, loading: false }
        default: 
            return state;
    }
}
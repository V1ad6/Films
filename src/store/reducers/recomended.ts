import { RecomendedState, RecomendedAction, RecomendedActionTypes } from "../../types/recomended"

const initialState: RecomendedState = {
    list: [],
    loading: false,
    error: null
}

export const recomendedReducer = (state = initialState, action: RecomendedAction) => {
    switch(action.type) {
        case RecomendedActionTypes.GET_RECOMENDED: 
            return { list: [], loading: true, error: null };
        case RecomendedActionTypes.GET_RECOMENDED_SUCCESS:
            return { list: action.payload, loading: false, error: null };
        case RecomendedActionTypes.GET_RECOMENDED_ERROR:
            return { list: [], loading: false, error: action.payload };
        default: 
            return state;
    }
}
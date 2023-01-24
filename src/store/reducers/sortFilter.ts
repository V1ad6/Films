import { sortFilterAction, sortFilterState, sortFilterTypes } from "../../types/sortFilter"

const initialState: sortFilterState = {
    sort: 'rating',
    filter: {
        type: 'none',
        value: '',
    },
}

export const sortFilterReducer = (state = initialState, action: sortFilterAction) => {
    switch (action.type) {
        case sortFilterTypes.SORT_LIST: 
            return {...state, sort: action.payload}
        case sortFilterTypes.FILTER_LIST:
            return {...state, filter: action.payload}
        default:
            return state;
    }
}
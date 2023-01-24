const initialState: {query: string} = {
    query: '',
}

export interface searchAction {
    type: 'SEARCH_FILM';
    payload: string;
}

export const searchReducer = (state = initialState, action: searchAction) => {
    switch (action.type) {
        case 'SEARCH_FILM':
            return {query: action.payload} 
        default: 
            return state;
    }
}
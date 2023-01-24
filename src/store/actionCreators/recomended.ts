import { RecomendedAction, RecomendedActionTypes } from "../../types/recomended";
import { Dispatch } from "redux";
import axios from "axios";

export const getRecomendedList = () => async (dispatch: Dispatch<RecomendedAction>) => {
    try {
        dispatch({ type: RecomendedActionTypes.GET_RECOMENDED });
        const recomended = await axios.get('https://imdb-api.com/en/API/Top250Movies/k_fw64epzb');
        dispatch({ type: RecomendedActionTypes.GET_RECOMENDED_SUCCESS, payload: recomended.data.items });
    } catch(e) {
        dispatch({ 
            type: RecomendedActionTypes.GET_RECOMENDED_ERROR, 
            payload: 'Error while fetching recomended films data' 
        });
    }
} 
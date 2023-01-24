import axios from "axios";
import { Dispatch } from "redux";
import { UpcomingAction, UpcomingActionTypes } from "../../types/upcoming";

export const getUpcomingList = () => async (dispatch: Dispatch<UpcomingAction>) => {
    try {
        dispatch({ type: UpcomingActionTypes.GET_FILMS });
        const upcomingList = await axios.get('https://imdb-api.com/en/API/ComingSoon/k_fw64epzb');
        dispatch({ type: UpcomingActionTypes.GET_FILMS_SUCCESS, payload: upcomingList.data.items });
    } catch(e) {
        dispatch({ type: UpcomingActionTypes.GET_FILMS_ERROR, payload: 'Ошибка при загрузке списка'});
    }
}
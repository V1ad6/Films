import { fetchFilmTypes, filmAction } from "../../types/film";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchFilm = (id: string | null) => async (dispatch: Dispatch<filmAction>) => {
    try {
        const filmData = await axios.get(`https://imdb-api.com/en/API/Title/k_fw64epzb/${id}`);
        dispatch({type: fetchFilmTypes.FETCH_FILM_SUCCESS, payload: filmData.data})
    } catch(e) {
        dispatch({type: fetchFilmTypes.FETCH_FILM_ERROR, payload: 'Не удалось найти фильм'})
    }
}
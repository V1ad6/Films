import { filmAction, filmState, Film } from "../../types/film";

const initialFilm: Film = {
    title: '',
    image: '',
    releaseDate: '',
    runtimeStr: '',
    plot: '',
    awards: '',
    genres: '',
    languages: '',
    imDbRating: '',
    directors: '',
    writers: '',
    actorList: [{
        name: ''
    }],
}

const initialState: filmState = {
    id: '',
    film: initialFilm,
    error: null,
    loading: false,
}

export const filmReducer = (state = initialState, action: filmAction) => {
    switch (action.type) {
        case 'FETCH_FILM':
            return { id: action.payload, film: initialFilm, error: null, loading: true }
        case 'FETCH_FILM_SUCCESS':
            return { id: state.id, film: action.payload, error: null, loading: false }
        case 'FETCH_FILM_ERROR':
            return { id: state.id, film: initialFilm, error: action.payload, loading: false }
        default:
            return state;
    }
}
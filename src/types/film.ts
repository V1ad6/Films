export enum fetchFilmTypes {
    FETCH_FILM = 'FETCH_FILM',
    FETCH_FILM_SUCCESS = 'FETCH_FILM_SUCCESS',
    FETCH_FILM_ERROR = 'FETCH_FILM_ERROR',
}

export interface filmState {
    id: string;
    film: Film;
    error: string | null;
    loading: boolean;
}

export interface Film {
    title: string;
    image: string;
    releaseDate: string;
    runtimeStr: string;
    plot: string;
    awards: string;
    genres: string;
    languages: string;
    imDbRating: string;
    directors: string;
    writers: string;
    actorList: Array<{name: string}>;
}

interface fetchFilmAction {
    type: fetchFilmTypes.FETCH_FILM;
    payload: string;
}

interface fetchFilmActionSuccess {
    type: fetchFilmTypes.FETCH_FILM_SUCCESS;
    payload: any;
}

interface fetchFilmActionError {
    type: fetchFilmTypes.FETCH_FILM_ERROR;
    payload: string;
}

export type filmAction = fetchFilmAction | fetchFilmActionSuccess | fetchFilmActionError;
export enum UpcomingActionTypes {
    GET_FILMS = 'GET_FILMS',
    GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS',
    GET_FILMS_ERROR = 'GET_FILMS_ERROR'
}

export interface UpcomingFilm {
    id: number;
    title: string;
    image: string;
}

export interface UpcomingState {
    films: any[];
    error: string | null;
    loading: boolean;
}

interface getFilmsAction {
    type: UpcomingActionTypes.GET_FILMS;
}

interface getFilmsSuccessAction {
    type: UpcomingActionTypes.GET_FILMS_SUCCESS;
    payload: any[];
}

interface getFilmsErrorAction {
    type: UpcomingActionTypes.GET_FILMS_ERROR;
    payload: string;
}

export type UpcomingAction = getFilmsAction | getFilmsSuccessAction | getFilmsErrorAction;
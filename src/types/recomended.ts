export enum RecomendedActionTypes {
    GET_RECOMENDED = 'GET_RECOMENDED',
    GET_RECOMENDED_SUCCESS = 'GET_RECOMENDED_SUCCESS',
    GET_RECOMENDED_ERROR = 'GET_RECOMENDED_ERROR',
}

export interface RecomendedState {
    list: RecomendedFilm[];
    loading: boolean;
    error: string | null;
}

export interface RecomendedFilm {
    id: number;
    title: string;
    year: string;
    image: string;
    imDbRating: number;
}

interface getRecomendedAction {
    type: RecomendedActionTypes.GET_RECOMENDED;
}

interface getRecomendedSuccessAction {
    type: RecomendedActionTypes.GET_RECOMENDED_SUCCESS;
    payload: RecomendedFilm[];
}

interface getRecomendedErrorAction {
    type: RecomendedActionTypes.GET_RECOMENDED_ERROR;
    payload: string;
}

export type RecomendedAction = getRecomendedAction | getRecomendedSuccessAction | getRecomendedErrorAction;
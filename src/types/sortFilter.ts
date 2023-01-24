export interface sortFilterState {
    sort: string;
    filter: FilmFilter;
}

export interface FilmFilter {
    type: string,
    value: string | number,
}

export enum sortFilterTypes {
    SORT_LIST = 'SORT_LIST',
    FILTER_LIST = 'FILTER_LIST',
}

interface SortAction {
    type: sortFilterTypes.SORT_LIST;
    payload: string;
}

interface FilterAction {
    type: sortFilterTypes.FILTER_LIST;
    payload: FilmFilter;
}

export type sortFilterAction = SortAction | FilterAction;
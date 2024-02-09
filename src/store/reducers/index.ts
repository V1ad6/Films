import { combineReducers } from "redux";
import { filmReducer } from "./film";
import { recomendedReducer } from "./recomended";
import { searchReducer } from "./search";
import { sortFilterReducer } from "./sortFilter";
import { upcomingReducer } from "./upcoming";
import { aboutPageReducer } from "./about";

export const rootReducer = combineReducers({
    upcoming: upcomingReducer,
    recomended: recomendedReducer,
    film: filmReducer,
    search: searchReducer,
    sortFilter: sortFilterReducer,
    aboutPage: aboutPageReducer
});

export type RootState = ReturnType<typeof rootReducer>
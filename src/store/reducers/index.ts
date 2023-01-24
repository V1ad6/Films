import { combineReducers } from "redux";
import { filmReducer } from "./film";
import { recomendedReducer } from "./recomended";
import { searchReducer } from "./search";
import { sortFilterReducer } from "./sortFilter";
import { upcomingReducer } from "./upcoming";

export const rootReducer = combineReducers({
    upcoming: upcomingReducer,
    recomended: recomendedReducer,
    film: filmReducer,
    search: searchReducer,
    sortFilter: sortFilterReducer
});

export type RootState = ReturnType<typeof rootReducer>
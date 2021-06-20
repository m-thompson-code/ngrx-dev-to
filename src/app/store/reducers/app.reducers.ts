import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "@store/state/app.state";
import { configReducers } from "./config.reducers";
import { userReducers } from "./user.reducers";

// TODO: check any
export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: userReducers,
    config: configReducers,
};

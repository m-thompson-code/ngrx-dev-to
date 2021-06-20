import { createSelector } from "@ngrx/store";
import { IAppState } from "@store/state/app.state";
import { IConfigState } from "@store/state/config.state";

const configState = (state: IAppState) => state.config;

export const selectConfig = createSelector(
    configState,
    (state: IConfigState) => state.config,
);

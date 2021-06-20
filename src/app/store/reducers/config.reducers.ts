import { ConfigActions, EConfigActions } from "@store/actions/config.actions";
import { IConfigState, initialConfigState } from "@store/state/config.state";

export const configReducers = (
    state = initialConfigState,
    action: ConfigActions,
): IConfigState => {
    switch (action.type) {
        case EConfigActions.GetConfigSuccess: {
            return {
                ...state,
                config: action.payload,
            };
        }

        default:
            return state;
    }
};

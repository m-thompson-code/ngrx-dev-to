import { EUserActions, UserActions } from "@store/actions/user.actions";
import { initialUserState, IUserState } from "@store/state/user.state";

export const userReducers = (
    state = initialUserState,
    action: UserActions,
): IUserState => {
    switch (action.type) {
        case EUserActions.GetUsers: {
            return {
                ...state,
                users: {
                    ...state.users,
                    loading: true,
                },
            };
        }

        case EUserActions.GetUsersSuccess: {
            return {
                ...state,
                users: {
                    ...state.users,
                    value: action.users,
                    loading: false,
                },
            };
        }

        case EUserActions.GetUser: {
            return {
                ...state,
                selectedUser: {
                    ...state.selectedUser,
                    loading: true,
                },
            };
        }

        case EUserActions.GetUserSuccess: {
            return {
                ...state,
                selectedUser: {
                    ...state.selectedUser,
                    value: action.user,
                    loading: false,
                },
            };
        }

        default:
            return state;
    }
};

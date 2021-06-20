import { IUser, Nullable } from "@models/user.model";

// Consideration: It might make sense to split users and selectedUser into different states?
export interface IUserState {
    users: {
        value: Nullable<IUser[]>;
        loading: boolean;
    },
    selectedUser: {
        value: Nullable<IUser>;
        loading: boolean;
    }
}

export const initialUserState: IUserState = {
    users: {
        value: null,
        loading: false,
    },
    selectedUser: {
        value: null,
        loading: false,
    },
};

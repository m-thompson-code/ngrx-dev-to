import { IUser, Nullable } from "@models/user.model";

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

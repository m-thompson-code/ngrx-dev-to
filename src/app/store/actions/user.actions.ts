import { IUser } from '@models/user.model';
import { Action } from '@ngrx/store';

export enum EUserActions {
    GetUsers = '[User] Get Users',
    GetUsersSuccess = '[User] Get Users Success',
    UsersLoading = '[boolean] Users Loading',
    GetUser = '[User] Get User',
    GetUserSuccess = '[User] Get User Success',
    UserLoading = '[boolean] User Loading',
}

export class GetUsers implements Action {
    public readonly type = EUserActions.GetUsers;
}

export class UsersLoading implements Action {
    public readonly type = EUserActions.UsersLoading;
    constructor(public loading: boolean) {}
}

export class GetUsersSuccess implements Action {
    public readonly type = EUserActions.GetUsersSuccess;
    constructor(public users: IUser[]) {}
}

export class GetUser implements Action {
    public readonly type = EUserActions.GetUser;
    constructor(public userId: number) {}
}

export class GetUserSuccess implements Action {
    public readonly type = EUserActions.GetUserSuccess;
    constructor(public user: IUser) {}
}

export class UserLoading implements Action {
    public readonly type = EUserActions.UserLoading;
    constructor(public loading: boolean) {}
}

export type UserActions = GetUsers | GetUsersSuccess | UsersLoading | UserLoading | GetUser | GetUserSuccess;

export interface IUser {
    id: number;
    name: string;
    cardNumber: string;
    cardType: string;
}

export interface IConfig {
    adminName: string;
    permissions?: string[];
}

export type Nullable<T> = T | null;

export interface IUserHttp {
    users: IUser[];
}

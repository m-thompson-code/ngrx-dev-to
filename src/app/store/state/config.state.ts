import { IConfig, Nullable } from "@models/user.model";

export interface IConfigState {
    config: Nullable<IConfig>;
}

export const initialConfigState: IConfigState = {
    config: null,
};

import { Injectable } from "@angular/core";
import { IUser, IUserHttp, Nullable } from "@models/user.model";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { UserService } from "@services/user.service";
import { EUserActions, GetUser, GetUsers, GetUsersSuccess, GetUserSuccess, UserLoading, UsersLoading } from "@store/actions/user.actions";
import { selectUserList } from "@store/selectors/user.selectors";
import { IAppState } from "@store/state/app.state";
import { merge, of } from 'rxjs';
import { switchMap, map, withLatestFrom, tap, mapTo } from "rxjs/operators";

@Injectable()
export class UserEffects {
    constructor(
        private _userService: UserService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) {}

    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        map(action => action.userId),
        withLatestFrom(this._store.pipe(select(selectUserList))),
        map(([id, users]) => {
            console.log(id);
            const selectedUser: Nullable<IUser> = (users.value ?? []).filter(user => user.id === id)[0] ?? null;
            return {id, selectedUser};
        }),
        switchMap(({id, selectedUser}) => {
            if (selectedUser) {
                return of(selectedUser);
            }

            return this._userService.getUser(id);
        }),
        map(user => new GetUserSuccess(user))
    );

    @Effect()
    getUsers$ = this._actions$.pipe(
        ofType<GetUsers>(EUserActions.GetUsers),
        withLatestFrom(this._store.pipe(select(selectUserList))),
        switchMap(([, users]) => users.value ? of(users.value) : this._userService.getUsers()),
        map((users: IUser[]) => new GetUsersSuccess(users)),
    );
}

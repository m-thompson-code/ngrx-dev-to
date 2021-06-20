import { Injectable } from "@angular/core";
import { IConfig, IUserHttp } from "@models/user.model";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { ConfigService } from "@services/config.service";
import { UserService } from "@services/user.service";
import { EConfigActions, GetConfig, GetConfigSuccess } from "@store/actions/config.actions";
import { EUserActions, GetUser, GetUsers, GetUsersSuccess, GetUserSuccess } from "@store/actions/user.actions";
import { selectUserList } from "@store/selectors/user.selectors";
import { IAppState } from "@store/state/app.state";
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from "rxjs/operators";

@Injectable()
export class ConfigEffects {
    constructor(
        private _configService: ConfigService,
        private _actions$: Actions,
    ) {}

    @Effect()
    getConfig$ = this._actions$.pipe(
        ofType<GetConfig>(EConfigActions.GetConfig),
        switchMap(() => this._configService.getConfig()),
        switchMap((config: IConfig) => of(new GetConfigSuccess(config))),
    );
}

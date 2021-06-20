import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetConfig } from '@store/actions/config.actions';
import { GetUsers } from '@store/actions/user.actions';
import { selectConfig } from '@store/selectors/config.selector';
import { selectUserList } from '@store/selectors/user.selectors';
import { IAppState } from '@store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nxrg-dev-to';
  config$ = this._store.pipe(select(selectConfig));

  constructor(private _store: Store<IAppState>) {}

  ngOnInit(): void {
    this._store.dispatch(new GetConfig());
  }
}

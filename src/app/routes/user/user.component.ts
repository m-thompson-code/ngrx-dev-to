import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { GetUser } from '@store/actions/user.actions';
import { selectSelectedUser } from '@store/selectors/user.selectors';
import { IAppState } from '@store/state/app.state';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$ = this._store.pipe(select(selectSelectedUser));
  constructor(private _store: Store<IAppState>, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._store.dispatch(new GetUser(+(this._route.snapshot.params.id as string)));
  }
}

import { Injectable } from '@angular/core';
import { IConfig } from '@models/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getConfig(): Observable<IConfig> {
    return of({
      adminName: 'some admin name',
    });
  }
}

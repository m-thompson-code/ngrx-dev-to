import { Injectable } from '@angular/core';
import { IUser, IUserHttp } from '@models/user.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const second = 1000;
const minute = second * 60;
const hour = minute * 60;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(id: number): Observable<IUser> {
    console.log('getUser', id);

    return of({
      id: id,
      name: `name ${id}`,
      cardNumber: `cardNumber ${id}`,
      cardType: `cardType ${id}`,
    }).pipe(delay(3000));
  }

  getUsers(): Observable<IUser[]> {
    console.log('getUsers');
    const now = Math.floor(Date.now() / second);

    const users: IUser[] = [
      {
        id: now - hour/second * 2,
        name: `name ${now - hour/second * 2}`,
        cardNumber: `cardNumber ${now - hour/second * 2}`,
        cardType: `cardType ${now - hour/second * 2}`,
      },
      {
        id: now - hour/second,
        name: `name ${now - hour/second}`,
        cardNumber: `cardNumber ${now - hour/second}`,
        cardType: `cardType ${now - hour/second}`,
      },
      {
        id: now,
        name: `name ${now}`,
        cardNumber: `cardNumber ${now}`,
        cardType: `cardType ${now}`,
      }
    ];

    return of(users).pipe(delay(3000));
  }
}

import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IToDoList } from './to-do-list';

@Injectable()
export class ToDoListService {
  private _toDoListUrl = 'http://localhost:3999/api/todoLists';//'./temp-api/tasks.json';

  constructor(private _http: HttpClient) {}

  getToDoLists(): Observable<IToDoList[]> {
    return this._http.get<IToDoList[]>(this._toDoListUrl)
        .do(data => console.log(`All: ${JSON.stringify(data)}`))
        .catch(this.handleError); 
  }

  getToDoList(userName: string): Observable<IToDoList> {
    return this.getToDoLists().map((lists) => {
      return lists.find((list) => list._userName === userName);
    });
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}

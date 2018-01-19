import { Component, OnInit, Injectable } from '@angular/core';
import { IToDoList } from './to-do-list';
import { ToDoListService } from './to-do-list.service';
import { IToDoTask } from './to-do-task';

@Injectable()
@Component({
  selector: 'app-to-do-table',
  templateUrl: './to-do-table.component.html',
  styleUrls: ['./to-do-table.component.css']
})
export class ToDoTableComponent implements OnInit {
  tasks: IToDoTask[];

  constructor(private _toDoListService: ToDoListService) { }

  ngOnInit(): void {
    this._toDoListService.getToDoList('Eoghan')
      .subscribe(toDoList => this.tasks = toDoList._allTasks,
            error => console.log (<any>error));
  }

}

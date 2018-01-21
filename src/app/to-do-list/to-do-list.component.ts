import { Component, OnInit } from '@angular/core';
import { IToDoTask } from './to-do-task';
import { IToDoList } from './to-do-list';
import { ToDoListService } from './to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  
  toDoList: IToDoList;

  constructor(private _toDoListService: ToDoListService) { }

  ngOnInit() {
    this._toDoListService.getToDoList('Eoghan')
      .subscribe(toDoList => this.toDoList = toDoList,
            error => console.log (<any>error));
  }

  selectedTask: IToDoTask;

  selectedTaskChange(event): void {
    this.selectedTask = event;
  }

  newTask():void {
    this.selectedTask = <IToDoTask> {dateCreated: Date.now()};
  }

  insertNewTask(event): void {
    this.toDoList._allTasks.push(this.selectedTask);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { IToDoTask } from './to-do-task';
import { IToDoList } from './to-do-list';
import { ToDoListService } from './to-do-list.service';
import { EditTaskComponent } from './edit-task/edit-task.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  toDoList: IToDoList;
  selectedTask: IToDoTask;
  @ViewChild(EditTaskComponent) private editComponent: EditTaskComponent;

  constructor(private _toDoListService: ToDoListService) { }

  ngOnInit() {
    this._toDoListService.getToDoList('Eoghan')
      .subscribe(toDoList => this.toDoList = toDoList,
            error => console.log (<any>error));
  }

  selectedTaskChange(event): void {
    this.selectedTask = event;
  }

  newTask(): void {
    this.selectedTask = <IToDoTask> {dateCreated: Date.now()};
  }

  taskChanged(event): void {
    if (event) {
      this.toDoList._allTasks.push(this.selectedTask);
    } else {
      console.log(`Don't need to insert ${this.selectedTask.name}`);
    }
    // push the list back to the API
    this._toDoListService.postToDoList(this.toDoList)
      .subscribe(retVal => console.log(`Got back ${retVal}`),
            error => console.log(<any>error));
  }
}

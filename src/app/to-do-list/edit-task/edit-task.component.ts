import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IToDoTask } from '../to-do-task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }  

  @Input()
  set task(task: IToDoTask) {
    if (task) {
      this._task = task;
      if (this._task.name) {
        this.operationText = 'Update';
        this.isInsert = false;
      }
      else {
        this.operationText = 'Insert';
        this.isInsert = true;
      }
    }    
  }
  
  get name(): IToDoTask {
    return this._task;
  }

  private _task: IToDoTask = null;

  errorMessage: string;
  deleteMessageEnabled: boolean;
  isInsert: boolean = true;
  operationText: string = 'Insert';

  @Output()
  submitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  onSubmit() {
    this.submitted.emit(true);
  }

}

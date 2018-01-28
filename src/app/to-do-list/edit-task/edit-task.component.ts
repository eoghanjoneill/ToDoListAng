import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IToDoTask } from '../to-do-task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  private _task: IToDoTask = null;
  private _originalTask: IToDoTask = null;
  private _operationText: string = 'Insert';
  errorMessage: string;
  deleteMessageEnabled: boolean;
  private _isInsert: boolean = true;
  @Output()
  submitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  get task(): IToDoTask {
    return this._task;
  }

  @Input()
  set task(task: IToDoTask) {
    if (task) {
      this._originalTask = task;
      this._task = { ...this._originalTask };
      this.isInsert = !!!this._task.name;
    }
  }

  get isInsert(): boolean {
    return this._isInsert;
  }
  set isInsert(isInsert: boolean) {
    this._isInsert = isInsert;
    this._operationText = isInsert ? 'Insert' : 'Update';
  }

  onSubmit() {
    // save the values into the original task
    Object.keys(this._task).forEach(key => this._originalTask[key] = this._task[key]);
    this.submitted.emit(this.isInsert);
    this.isInsert = false;
  }

}

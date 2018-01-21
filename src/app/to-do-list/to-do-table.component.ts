import { Component, OnInit, Injectable, Input, Output, EventEmitter } from '@angular/core';


import { IToDoList } from './to-do-list';
import { ToDoListService } from './to-do-list.service';
import { IToDoTask } from './to-do-task';


@Component({
  selector: 'app-to-do-table',
  templateUrl: './to-do-table.component.html',
  styleUrls: ['./to-do-table.component.css']
})
export class ToDoTableComponent implements OnInit {
  
  @Input()
  tasks: IToDoTask[];

  @Output()
  selectedTask: EventEmitter<IToDoTask> = new EventEmitter<IToDoTask>();

  constructor() { }

  ngOnInit(): void { }

  selectTask(task: IToDoTask) :void {
    this.selectedTask.emit(task);
  }
}

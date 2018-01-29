import { Component, OnInit, Injectable, Input, Output, EventEmitter } from '@angular/core';


import { IToDoList } from './to-do-list';
import { ToDoListService } from './to-do-list.service';
import { IToDoTask } from './to-do-task';
import { Sorter } from '../shared/sorter';

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

  constructor(private _sorter: Sorter) { }

  ngOnInit(): void { }

  selectTask(task: IToDoTask): void {
    this.selectedTask.emit(task);
  }

  deleteTask(task: IToDoTask): void {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    this.selectedTask.emit(null);
  }

  sort(prop: string) {
    this._sorter.sort(this.tasks, prop);
  }

  sortGlyph(): string {
    if (this._sorter.direction === 1) {
      return 'glyphicon glyphicon-menu-down';
    } else {
      return 'glyphicon glyphicon-menu-up';
    }

  } 
}


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToDoTableComponent } from './to-do-list/to-do-table.component';
import { ToDoListService } from './to-do-list/to-do-list.service';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { EditTaskComponent } from './to-do-list/edit-task/edit-task.component';
import { Sorter } from './shared/sorter';



@NgModule({
  declarations: [
    AppComponent,
    ToDoTableComponent,
    ToDoListComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ToDoListService, Sorter],
  bootstrap: [AppComponent]
})
export class AppModule { }

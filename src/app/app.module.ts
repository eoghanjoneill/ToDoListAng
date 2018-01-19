import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToDoTableComponent } from './to-do-list/to-do-table.component';
import { ToDoListService } from './to-do-list/to-do-list.service';



@NgModule({
  declarations: [
    AppComponent,
    ToDoTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ToDoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

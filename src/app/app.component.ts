import { Component } from '@angular/core';
import { ToDoListService } from './to-do-list/to-do-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
    ,
  ],
  providers: [ToDoListService]
})
export class AppComponent {
  title = 'Eoghan\'s angular ToDoList';
}

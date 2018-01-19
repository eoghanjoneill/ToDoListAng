import { IToDoTask } from "./to-do-task";

export interface IToDoList {
  _userName: string;
  _lastSaved: Date;
  _apiUrl: string;
  _allTasks: IToDoTask[];
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddTask() {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}

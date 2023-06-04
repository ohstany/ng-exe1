import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((v) => (this.showAddTask = v));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      console.log('Add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    // clear initials
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'Task';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((v) => (this.showAddTask = v));
  }

  ngOnInit(): void {}

  toggleAddTask() {
    console.log('toggle');
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}

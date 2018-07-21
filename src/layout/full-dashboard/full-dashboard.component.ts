import { Component, OnInit } from '@angular/core';
import { Application } from '../../core/enum';
import { AccountService } from '../../core/service';

@Component({
  selector: 'app-full-dashboard',
  templateUrl: './full-dashboard.component.html',
  styleUrls: ['./full-dashboard.component.css']
})
export class FullDashboardComponent implements OnInit {
  public enumApplication = Application;

  constructor(private accountService: AccountService) {}

  ngOnInit() {}

  public logout(): void {
    this.accountService.logout();
  }
}

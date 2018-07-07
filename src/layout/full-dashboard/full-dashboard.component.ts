import { Component, OnInit } from '@angular/core';
import { Application } from '../../core/enum';

@Component({
  selector: 'app-full-dashboard',
  templateUrl: './full-dashboard.component.html',
  styleUrls: ['./full-dashboard.component.css']
})
export class FullDashboardComponent implements OnInit {
  public enumApplication = Application;

  constructor() {}

  ngOnInit() {}
}

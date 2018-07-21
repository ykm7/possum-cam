import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../core/service/device.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private deviceService: DeviceService) {}

  ngOnInit() {}
}

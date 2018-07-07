import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  public login() {
    this.authService.login();
  }

}

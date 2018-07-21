import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../core/service/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(public authService: AccountService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  public googleLogin() {
    this.authService.googleLogin();
  }

  public emailLogin() {
    this.authService.emailLogin(
      this.form.controls['username'].value,
      this.form.controls['password'].value
    );
  }

  public register() {}
}

import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DriverService } from 'src/app/services/driverService/driver.service';
import { LoginService } from 'src/app/services/loginService/login.service';
import { TokenService } from 'src/app/services/tokenService/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  myForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private tokenService: TokenService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  async loggin() {
    try {
      const res = await this.loginService.login(this.myForm.value);
      const token = await res.user.getIdToken();
      localStorage.setItem('token', token);
      this.tokenService.setToken(token || '');
      this.router.navigateByUrl('/dashboard');
    } catch (err) {
      this.snackBar.open("Check your credentials", "Cerrar", {
        duration: 3000,
      });
    }
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

}

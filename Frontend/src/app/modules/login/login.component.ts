import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isFormInvalid = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) {
    this.loginForm = formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    });
  }

  ngOnInit(): void {
  }

  submitLoginForm() {
    this.isFormInvalid = this.loginForm.invalid;

    if (this.isFormInvalid) {
      return;
    }

    const loginData = this.loginForm.value;

    this.loginService.login(loginData).subscribe(data => {
      const {userId} = data;

      this.loginService.setUserId(userId);

      this.router.navigate(['feed']);
    }, error => {
      if (error) {
        this.isFormInvalid = true;

        console.log(error);
      }
    });

  }
}

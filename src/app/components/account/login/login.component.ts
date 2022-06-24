import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

export interface userDTO {
  phoneNumber: string,
  password: string,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
    class: "flex w-full item-center justify-center"
  }
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  loginWithPasswordData: userDTO = {phoneNumber: '', password: ''}
  // loginWithPasswordData!: userDTO 
  constructor(
    private fb: FormBuilder, 
    private auth: AuthService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]{10}$/i)])],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    console.log(this.loginForm)
    this.loginWithPassword();
  }

  loginWithPassword() {
    const model = this.perModel();
    // console.log(1)
    this.auth.loginUser(model)
      .subscribe(
        // console.log('xyz')
        res => {
          localStorage.setItem('accessToken', res.accessToken)
          this.router.navigate(['/account/dang-nhap/chon-cua-hang'])
        },
        err => console.log(err),
      )
      // console.log('bac')
  }

  perModel() {
    if (this.loginForm.value.username) {
      this.loginWithPasswordData.phoneNumber = this.loginForm.value.username
    }
    if (this.loginForm.value.password) {
      this.loginWithPasswordData.password = this.loginForm.value.password
    }
    return this.loginWithPasswordData;
  }

}


import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;
@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
  host: {
    class: "flex w-full item-center justify-center"
  }
})
export class SigninFormComponent implements OnInit {
  infoSigninForm!: FormGroup
  constructor(private fb: FormBuilder) {
    this.infoSigninForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(PASSWORD_PATTERN)
        ])
      ],
      retype: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(PASSWORD_PATTERN),
        ])
      ]
    },
      {
        validator: this.checkPassword
      }
    );

  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.infoSigninForm);
  }

  checkPassword(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPassword = group.controls.retype.value;

    const error = pass === confirmPassword ? null : { notSame: true }
    let errorOfRetype = {
      ...group.controls.retype.errors
    }
    if (error != null) {
      errorOfRetype = {
        ...errorOfRetype,
        ...error
      }
    } else {
      delete errorOfRetype['notSame'];
    }
    if (Object.keys(errorOfRetype).length == 0) {
      group.controls.retype.setErrors(null);
    } else {
      group.controls.retype.setErrors(errorOfRetype);
    }
    return error;
  }
  
}

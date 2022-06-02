import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification-signin',
  templateUrl: './verification-signin.component.html',
  styleUrls: ['./verification-signin.component.scss'],
  host: {
    class: "flex w-full item-center justify-center"
  }
})
export class VerificationSigninComponent implements OnInit {
  verificationForm!: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.verificationForm = this.fb.group({
      code1: ['',Validators.required],
      code2: ['',Validators.required],
      code3: ['',Validators.required],
      code4: ['',Validators.required],
      code5: ['',Validators.required],
      code6: ['',Validators.required],
    })
  }

   // Auto focus input
   move(event: any, p: any, c: any, n: any) {
    // debugger
    var length = c.value.length;
    var maxlength = c.getAttribute('maxlength');
    if (length == maxlength) {
      if (n != "") {
        n.focus();
      }
    }
    if (event.key == "Backspace") {
      if (p != "") {
        p.focus();
      }
    }
  }
  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  onSubmit(){
    console.log(this.verificationForm)
  }
}

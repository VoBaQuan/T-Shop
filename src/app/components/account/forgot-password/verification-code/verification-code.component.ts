import { Component, OnInit, ViewChild } from '@angular/core';
import { TDSHelperString } from 'tmt-tang-ui';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss'],
  host: {
    class: "flex w-full item-center justify-center focus:outline-none"
  }
})
export class VerificationCodeComponent implements OnInit {
  showBorder: boolean = false;
  text1 = '';
  text2 = '';
  text3 = '';
  text4 = '';
  text5 = '';
  text6 = '';
  constructor() { }

  ngOnInit(): void {
  }
  // Auto focus input
  move(e: any, p: any, c: any, n: any, stt: string) {
    var length = c.value.length;
    var maxlength = c.getAttribute('maxlength');
    if (length == maxlength) {
      if (n != "") {
        n.focus();
        this.gantext(e, stt);
      }
    }
    debugger
    if (e.key == "Backspace") {
      if (p != "") {
        p.focus();
        this.gantext(e, stt);
      }
    }
    
  }

  gantext(e: any, text: string) {
    switch (text) {
      case '1': {
        this.text1 = e.target.value;
        break;
      }
      case '2': {
        this.text2 = e.target.value;
        break;
      }
      case '3': {
        this.text3 = e.target.value;
        break;
      }
      case '4': {
        this.text4 = e.target.value;
        break;
      }
      case '5': {
        this.text5 = e.target.value;
        break;
      }
      case '6':
        this.text6 = e.target.value;
        break;
      default:
        this.text6 = e.target.value;
    }
  }

}

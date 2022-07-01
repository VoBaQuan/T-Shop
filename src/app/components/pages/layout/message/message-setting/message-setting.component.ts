import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TDSI18nService } from 'tds-ui/i18n';
@Component({
  selector: 'app-message-setting',
  templateUrl: './message-setting.component.html',
  styleUrls: ['./message-setting.component.scss'],
  host: {
    class: "flex justify-center"
  }
})
export class MessageSettingComponent implements OnInit {

  formDate = new FormControl(null, [Validators.required]);
  
  dayOfWeek: any[] = [
    { value: 2, isSelected: false },
    { value: 3, isSelected: false },
    { value: 4, isSelected: false },
    { value: 5, isSelected: false },
    { value: 6, isSelected: false },
    { value: 7, isSelected: false },
    { value: 'CN', isSelected: false },
  ];

  constructor(private i18n: TDSI18nService) { }

  ngOnInit(): void {
  }
    
  toggle(index: number): void {
    this.dayOfWeek[index].isSelected = !this.dayOfWeek[index].isSelected;
  }
  // chooseDate(key:number){
  //   this.isChoose.push(key)
  // }
  // check(key:number){
  //   // debugger
  //   let index = this.isChoose.findIndex(x => x == key)
  //   if(index == -1)
  //   return false
  //   return true
  // }
}

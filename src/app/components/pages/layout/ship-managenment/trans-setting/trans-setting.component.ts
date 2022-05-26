import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trans-setting',
  templateUrl: './trans-setting.component.html',
  styleUrls: ['./trans-setting.component.scss']
})
export class TransSettingComponent implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit(): void {
  }
  openTransportaion(){
    this.Router.navigate(['/pages/quanlyvanchuyen/chitiet-vanchuyen'])
  }
}

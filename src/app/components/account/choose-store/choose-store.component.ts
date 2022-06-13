import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-store',
  templateUrl: './choose-store.component.html',
  styleUrls: ['./choose-store.component.scss'],
  host:{
    class:"flex w-full item-center justify-center"
  }
})
export class ChooseStoreComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.getDataUser()
  }
  getDataUser(){
    localStorage.getItem('accessToken');
    this.userService.getDataUser().subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}

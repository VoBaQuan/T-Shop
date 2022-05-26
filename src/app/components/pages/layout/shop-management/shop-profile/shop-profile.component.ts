import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-profile',
  templateUrl: './shop-profile.component.html',
  styleUrls: ['./shop-profile.component.scss']
})
export class ShopProfileComponent implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit(): void {
  }
  openEditProfileShop(){
    this.Router.navigate(['/pages/quanlyshop/hoso/chinhsua'])
  }
}

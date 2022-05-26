import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile-shop',
  templateUrl: './edit-profile-shop.component.html',
  styleUrls: ['./edit-profile-shop.component.scss']
})
export class EditProfileShopComponent implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit(): void {
  }
  saveEditProfileShop(){
    this.Router.navigate(['/pages/quanlyshop/hoso'])
  }
}

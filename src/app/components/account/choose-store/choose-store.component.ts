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

  constructor() { }

  ngOnInit(): void {
  }

}

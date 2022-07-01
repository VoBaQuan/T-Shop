import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { Data } from './data';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public contact: number = 1;
  public contactOptions = [
    { id: 1, name: ' Elton John ' },
    { id: 2, name: 'Elvis Presley' },
    { id: 3, name: 'Paul McCartney' },
    { id: 4, name: 'Elton John' },
    { id: 5, name: 'Elvis Presley' },
    { id: 6, name: 'Paul McCartney' }
  ]

  isCollapsed = false;
    lstMenu =  Data;
    activeTab = 1;
    active = 1;
    active1 = 'top';

    setActiveTab(event:TDSSafeAny) {
      this.activeTab = event;
    }
  constructor() { }

  ngOnInit(): void {
  }
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  onOpenChange(e:boolean){
    this.isCollapsed = e;
  }

}

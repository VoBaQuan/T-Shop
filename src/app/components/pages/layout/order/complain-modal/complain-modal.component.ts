import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';
@Component({
  selector: 'app-complain-modal',
  templateUrl: './complain-modal.component.html',
  styleUrls: ['./complain-modal.component.scss']
})
export class ComplainModalComponent implements OnInit {
  public selected = 1;
  public listData = [
    { id: 1, name: 'Elton John' },
    { id: 2, name: 'Elvis Presley' },
    { id: 3, name: 'Paul McCartney' },
    { id: 4, name: 'Elton John' },
    { id: 5, name: 'Elvis Presley' },
    { id: 6, name: 'Paul McCartney' }
  ]
  constructor(private modal: TDSModalRef,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onModelChange(e: TDSSafeAny) {
    console.log(e)
  }
  cancel() {
    this.modal.destroy(null);
  }
}

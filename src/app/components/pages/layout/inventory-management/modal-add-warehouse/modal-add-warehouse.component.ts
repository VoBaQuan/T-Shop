import { Component, OnInit } from '@angular/core';
import { TDSModalRef } from 'tmt-tang-ui';
import { TDSSafeAny } from 'tmt-tang-ui';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal-add-warehouse',
  templateUrl: './modal-add-warehouse.component.html',
  styleUrls: ['./modal-add-warehouse.component.scss']
})
export class ModalAddWarehouseComponent implements OnInit {
  public listData = [
    { id: 1, name: 'Elton John' },
    { id: 2, name: 'Elvis Presley' },
    { id: 3, name: 'Paul McCartney' },
    { id: 4, name: 'Elton John' },
    { id: 5, name: 'Elvis Presley' },
    { id: 6, name: 'Paul McCartney' }
  ]
  constructor(private modal: TDSModalRef, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onModelChange(e: TDSSafeAny) {
    console.log(e)
  }
  cancel() {
    this.modal.destroy(null);
  }
}

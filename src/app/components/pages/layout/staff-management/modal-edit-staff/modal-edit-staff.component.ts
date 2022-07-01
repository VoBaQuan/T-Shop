import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';
@Component({
  selector: 'app-modal-edit-staff',
  templateUrl: './modal-edit-staff.component.html',
  styleUrls: ['./modal-edit-staff.component.scss']
})
export class ModalEditStaffComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  public selected = 1;
  public listData = [
    { id: 1, name: 'Elton John' },
    { id: 2, name: 'Elvis Presley' },
    { id: 3, name: 'Paul McCartney' },
    { id: 4, name: 'Elton John' },
    { id: 5, name: 'Elvis Presley' },
    { id: 6, name: 'Paul McCartney' }
  ]
  constructor(private modal: TDSModalRef) { }

  ngOnInit(): void {
  }
  onModelChange(e: TDSSafeAny) {
    console.log(e)
  }
  getErrorMessage(email: any) {
    if (email.hasError('required')) {
      return 'You must enter a value';
    }
    return email.hasError('email') ? 'Not a valid email' : '';
  }
  cancel() {
    this.modal.destroy(null);
}
}

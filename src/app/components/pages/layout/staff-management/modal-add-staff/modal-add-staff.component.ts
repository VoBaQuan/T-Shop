import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TDSModalRef } from 'tds-ui/modal';
@Component({
  selector: 'app-modal-add-staff',
  templateUrl: './modal-add-staff.component.html',
  styleUrls: ['./modal-add-staff.component.scss']
})
export class ModalAddStaffComponent implements OnInit {

  constructor(private modal: TDSModalRef, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  
  cancel() {
    this.modal.destroy(null);
  }
}

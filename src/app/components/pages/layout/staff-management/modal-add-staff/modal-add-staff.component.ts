import { Component, OnInit } from '@angular/core';
import { InputBoolean, TDSModalRef } from 'tmt-tang-ui';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';
@Component({
  selector: 'app-suggestions-other-modal',
  templateUrl: './suggestions-other-modal.component.html',
  styleUrls: ['./suggestions-other-modal.component.scss']
})
export class SuggestionsOtherModalComponent implements OnInit {
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

import { ComplainModalComponent } from './../complain-modal/complain-modal.component';
import { SuggestionsOtherModalComponent } from './../suggestions-other-modal/suggestions-other-modal.component';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TDSModalService } from 'tds-ui/modal';
@Component({
  selector: 'app-return-request',
  templateUrl: './return-request.component.html',
  styleUrls: ['./return-request.component.scss'],
  host: {
    class: "flex w-full"
  }
})
export class ReturnRequestComponent implements OnInit {

  constructor(private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }
  showModalSuggestion(): void {
    const modal = this.modalService.create({
      title: 'Đề xuất khác',
      content: SuggestionsOtherModalComponent,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
      }
    });
  }
  showModalComplain(): void {
    const modal = this.modalService.create({
      title: 'Khiếu nại đến TShop',
      content: ComplainModalComponent,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
      }
    });
  }
}

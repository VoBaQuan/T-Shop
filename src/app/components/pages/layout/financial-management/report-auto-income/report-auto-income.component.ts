import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';
@Component({
  selector: 'app-report-auto-income',
  templateUrl: './report-auto-income.component.html',
  styleUrls: ['./report-auto-income.component.scss']
})
export class ReportAutoIncomeComponent implements OnInit {
  public selected = 1;
  public listData = [
    { id: 1, name: 'Tháng 9/2021' },
    { id: 2, name: 'Elvis Presley' },
    { id: 3, name: 'Paul McCartney' },
    { id: 4, name: 'Elton John' },
    { id: 5, name: 'Elvis Presley' },
    { id: 6, name: 'Paul McCartney' }
  ];
  listOfData:Array<TDSSafeAny> = [
      {
        report: 'Báo cáo cho Tháng 8 2021',
        createDateReport: '20/01/2021',
        operation: ''
      },
      {
        report: 'Báo cáo cho Tháng 8 2021',
        createDateReport: '20/01/2021',
        operation: ''
      },
      {
        report: 'Báo cáo cho Tháng 8 2021',
        createDateReport: '20/01/2021',
        operation: ''
      },
      {
        report: 'Báo cáo cho Tháng 8 2021',
        createDateReport: '20/01/2021',
        operation: ''
      },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onModelChange(e: TDSSafeAny) {
    console.log(e)
  }
}

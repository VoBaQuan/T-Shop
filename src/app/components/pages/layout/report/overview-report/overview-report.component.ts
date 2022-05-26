import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-report',
  templateUrl: './overview-report.component.html',
  styleUrls: ['./overview-report.component.scss']
})
export class OverviewReportComponent implements OnInit {
  listOfData = [
    {
      view: '200',
      productSelled: '20',
      turnOver: '5.000.000'
    },
    {
      view: '200',
      productSelled: '20',
      turnOver: '5.000.000'
    },
    {
      view: '200',
      productSelled: '20',
      turnOver: '5.000.000'
    },
    {
      view: '200',
      productSelled: '20',
      turnOver: '5.000.000'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

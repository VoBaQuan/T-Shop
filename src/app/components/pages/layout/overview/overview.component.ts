import { Component, OnInit } from '@angular/core';
import { TDSBarChartComponent, TDSChartOptions } from 'tds-report';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  host: {
    class: 'flex flex-col h-full overflow-hidden'
  }
})
export class OverviewComponent implements OnInit {
  value: number = 0;
  listOfdata = [
    {
      id: '1',
      productName: 'INV51 - Giày hiphop',
      quality: '1211212',
      sold: 'Đã bán'
    },
    {
      id: '2',
      productName: 'INV51 - Giày hiphop',
      quality: '1211212',
      sold: 'Đã bán'
    },
    {
      id: '3',
      productName: 'INV51 - Giày hiphop',
      quality: '1211212',
      sold: 'Đã bán'
    },
  ]

  options: any;
  size: any = ['auto', 350];
  chartOptions = TDSChartOptions();

  chartComponent: TDSBarChartComponent = {
    title:
    {
      "show": true,
      "text": "Biểu đồ hiệu quả kinh doanh"
    },
    axis: {
      xAxis: [
        {
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        }
      ],
    },
    color: ['#2395FF', '#FF6720'],
    series: [
      {
        type: 'bar',
        name: 'Lượt xem',
        data: [220, 182, 111, 122, 345, 164, 101, 222, 234, 115, 90, 300]
      },
      {
        type: 'bar',
        name: 'Đơn hàng',
        data: [118, 92, 91, 102, 300, 109, 80, 145, 144, 95, 76, 220]
      }
    ]
  }
  constructor() { }

  ngOnInit(): void {
    this.options = this.chartOptions.TDSBarChartOption(this.chartComponent);
  }
  onChange(e: any) {
    console.log(e);
  }
  onFocus(e: any) {
    console.log("onFocus", e)
  }
  onBlur(e: any) {
    console.log("onBlur", e)
  }
  onKeyDown(e: any) {
    console.log("onKeyDown", e)
  }
  onItemHover(e: any) {
    console.log("onItemHover", e)
  }
}

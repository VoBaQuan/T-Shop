import { Component, OnInit } from '@angular/core';
import { TDSBarChartComponent, TDSChartOptions } from 'tds-report';


@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {
  options: any;
  expandSet = new Set<number>();
  listOfData = [
    {
      id: 1,
      activity: '',
      product: '',
      budgetDay: '1.000.000',
      advertisingCosts: '1.500.000',
      impressions: '1000',
      accessTimes: '200',
      oneImpressionsCost: '5',
      sales: '15.000.000',
      SellingExpenses: '10%',
      endDate: '20/10/2021',
      operationEdit: 'Chỉnh sửa',
      operationEnd: 'Kết thúc',
    },
    {
      id: 2,
      activity: '',
      product: '',
      budgetDay: '1.000.000',
      advertisingCosts: '1.500.000',
      impressions: '1000',
      accessTimes: '200',
      oneImpressionsCost: '5',
      sales: '15.000.000',
      SellingExpenses: '10%',
      endDate: '20/10/2021',
      operationEdit: 'Chỉnh sửa',
      operationEnd: 'Kết thúc',
    },
    {
      id: 3,
      activity: '',
      product: '',
      budgetDay: '1.000.000',
      advertisingCosts: '1.500.000',
      impressions: '1000',
      accessTimes: '200',
      oneImpressionsCost: '5',
      sales: '15.000.000',
      SellingExpenses: '10%',
      endDate: '20/10/2021',
      operationEdit: 'Chỉnh sửa',
      operationEnd: 'Kết thúc',
    },
    {
      id: 4,
      activity: '',
      product: '',
      budgetDay: '1.000.000',
      advertisingCosts: '1.500.000',
      impressions: '1000',
      accessTimes: '200',
      oneImpressionsCost: '5',
      sales: '15.000.000',
      SellingExpenses: '10%',
      endDate: '20/10/2021',
      operationEdit: 'Chỉnh sửa',
      operationEnd: 'Kết thúc',
    },
  ]
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
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
}

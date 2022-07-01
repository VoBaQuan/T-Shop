import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';
interface FilterStatusItemDTO {
  name: string;
  value: TDSSafeAny,
  count: number,
  disabled: boolean,
}
@Component({
  selector: 'app-evaluate-product',
  templateUrl: './evaluate-product.component.html',
  styleUrls: ['./evaluate-product.component.scss'],
  host:{
    class: 'h-full w-full flex'
  }
})
export class EvaluateProductComponent implements OnInit {
  selected = 0;
  lstData: Array<FilterStatusItemDTO> = [
    {
      name: 'Tất cả',
      value: 0,
      count: 100,
      disabled: false
    },
    {
      name: 'Chưa trả lời',
      value: 1,
      count: 20,
      disabled: false
    },
    {
      name: 'Đã trả lời',
      value: 2,
      count: 60,
      disabled: false
    },
    {
      name: 'Đã ẩn',
      value: 3,
      count: 20,
      disabled: true
    },
  ]

  listOfData: Array<TDSSafeAny> = [
    {
      orderCode: 'INV012154654',
      productImg: '',
      productName: '',
      name: 'Sunny Happy',
      numberPhone: '0941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluateDate: '20/10/2021',
      status: 'Chưa trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo',
    },
    {
      orderCode: 'INV012154654',
      productImg: '',
      productName: '',
      name: 'Sunny Happy',
      numberPhone: '0941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluateDate: '20/10/2021',
      status: 'Đã trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo',
    },
    {
      orderCode: 'INV012154654',
      productImg: '',
      productName: '',
      name: 'Sunny Happy',
      numberPhone: '0941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluateDate: '20/10/2021',
      status: 'Chưa trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo',
    },
    {
      orderCode: 'INV012154654',
      productImg: '',
      productName: '',
      name: 'Sunny Happy',
      numberPhone: '0941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluateDate: '20/10/2021',
      status: 'Chưa trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo',
    },
    {
      orderCode: 'INV012154654',
      productImg: '',
      productName: '',
      name: 'Sunny Happy',
      numberPhone: '0941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluateDate: '20/10/2021',
      status: 'Chưa trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo',
    },
    {
      orderCode: 'INV012154654',
      productImg: '',
      productName: '',
      name: 'Sunny Happy',
      numberPhone: '0941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluateDate: '20/10/2021',
      status: 'Chưa trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo',
    },
    {
      orderCode: 'INV012154654',
      productImg: '',
      productName: '',
      name: 'Sunny Happy',
      numberPhone: '0941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluateDate: '20/10/2021',
      status: 'Chưa trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo',
    },
    {
      orderCode: 'INV012154654',
      productImg: '',
      productName: '',
      name: 'Sunny Happy',
      numberPhone: '0941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluateDate: '20/10/2021',
      status: 'Chưa trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo',
    },
    {
      orderCode: 'INV012154654',
      productImg: '',
      productName: '',
      name: 'Sunny Happy',
      numberPhone: '0941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluateDate: '20/10/2021',
      status: 'Chưa trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onSelectChange(value: TDSSafeAny) {
    console.log('selectChange', value)
  }
  onModelChange(value: TDSSafeAny) {
    console.log('ngModelChange', value)
  }
}

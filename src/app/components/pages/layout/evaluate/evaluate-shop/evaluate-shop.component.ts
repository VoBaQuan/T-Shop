import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tmt-tang-ui';
import { TDSModalRef, TDSModalService } from 'tmt-tang-ui';

interface FilterStatusItemDTO {
  name: string;
  value: TDSSafeAny,
  count: number,
  disabled: boolean,
}
@Component({
  selector: 'app-evaluate-shop',
  templateUrl: './evaluate-shop.component.html',
  styleUrls: ['./evaluate-shop.component.scss']
})
export class EvaluateShopComponent implements OnInit {
  public selected1 =1;
    public listData = [
        { id: 1, name: 'Bình luận hông đúng sự thiệt' },
        { id: 2, name: 'Elvis Presley' },
        { id: 3, name: 'Paul McCartney' },
        { id: 4, name: 'Elton John' },
        { id: 5, name: 'Elvis Presley' },
        { id: 6, name: 'Paul McCartney' }
    ]

  isVisibleReply = false;
  isVisibleReport = false;

  value: number = 4;
  listOfData: Array<TDSSafeAny> = [
    {
      id: 1,
      name: 'Sun Happy',
      numberphone: '+84941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluatedate: '20/10/2021',
      status: 'Chưa trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo'
    },
    {
      id: 2,
      name: 'Sun Happy',
      numberphone: '+84941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ, nói chuyện rất dễ thương, rep tin nhắn nhanh nhẹn, Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ, Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ, Shop trả lời rất nhiệt tình, giải đáp thắc...',
      evaluatedate: '20/10/2021',
      status: 'Đã ẩn',
      operationReply: 'Trả lời',
      operationReport: 'Đã báo cáo'
    },
    {
      id: 3,
      name: 'Sun Happy',
      numberphone: '+84941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluatedate: '20/10/2021',
      status: 'Đã trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo'
    },
    {
      id: 1,
      name: 'Sun Happy',
      numberphone: '+84941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluatedate: '20/10/2021',
      status: 'Chưa trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo'
    },
    {
      id: 1,
      name: 'Sun Happy',
      numberphone: '+84941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluatedate: '20/10/2021',
      status: 'Chưa trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo'
    },
    {
      id: 1,
      name: 'Sun Happy',
      numberphone: '+84941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluatedate: '20/10/2021',
      status: 'Chưa trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo'
    },
    {
      id: 1,
      name: 'Sun Happy',
      numberphone: '+84941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluatedate: '20/10/2021',
      status: 'Chưa trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo'
    },
    {
      id: 1,
      name: 'Sun Happy',
      numberphone: '+84941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluatedate: '20/10/2021',
      status: 'Chưa trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo'
    },
    {
      id: 1,
      name: 'Sun Happy',
      numberphone: '+84941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluatedate: '20/10/2021',
      status: 'Chưa trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo'
    },
    {
      id: 1,
      name: 'Sun Happy',
      numberphone: '+84941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluatedate: '20/10/2021',
      status: 'Chưa trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo'
    },
    {
      id: 1,
      name: 'Sun Happy',
      numberphone: '+84941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluatedate: '20/10/2021',
      status: 'Chưa trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo'
    },
    {
      id: 1,
      name: 'Sun Happy',
      numberphone: '+84941641408',
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      evaluatedate: '20/10/2021',
      status: 'Chưa trả lời',
      operationReply: 'Trả lời',
      operationReport: 'Báo cáo'
    },
  ];

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
  constructor(private modalService: TDSModalService) { }

  ngOnInit(): void {

  }
  onSelectChange(value: TDSSafeAny) {
    console.log('selectChange', value)
  }
  onModelChange(value: TDSSafeAny) {
    console.log('ngModelChange', value)
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
  showModal(isShow: any): void {
    if (isShow == 'comment') {
      this.isVisibleReply = true
    }
    if (isShow == 'report') {
      this.isVisibleReport = true
    }
  }

  handleOk(isShow: any): void {
    setTimeout(() => {
      if (isShow == 'comment') {
        this.isVisibleReply = false
      }
      if (isShow == 'report') {
        this.isVisibleReport = false
      }
    }, 3000);
  }

  handleCancel(isShow: any): void {
    if (isShow == 'comment') {
      this.isVisibleReply = false
    }
    if (isShow == 'report') {
      this.isVisibleReport = false
    }
  }
}

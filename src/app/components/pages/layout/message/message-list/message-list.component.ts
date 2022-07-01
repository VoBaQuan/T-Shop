import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TDSModalService } from 'tds-ui/modal';
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
  host: {
    class: 'h-full flex flex-col'
  }
})
export class MessageListComponent implements OnInit {
  isVisible = false;
  constructor(private modal: TDSModalService) { }

  messOfShop = [
    {
      content: 'Chào em sản phẩm này hết rùi nhe, Chào em sản phẩm này hết rùi nhe, Chào em sản phẩm này hết rùi nhe, Chào em sản phẩm này hết rùi nhe,',
      time: '16:20',
      status: 'success'
    },
    {
      content: 'Tin nhắn này bị lỗi, Tin nhắn này bị lỗi, Tin nhắn này bị lỗi, Tin nhắn này bị lỗi,',
      time: 'Chưa gửi được, nhấn để gửi lại',
      status: 'error'
    },
  ]
  messOfCustomer = [
    {
      avatar: '/assets/img/11Avatar.png',
      content: 'Shop ơi cho hỏi sản phẩm này hiện tại bên mình còn không ạ, em mua',
      time: '16:20'
    },
    {
      avatar: '/assets/img/11Avatar.png',
      content: 'Shop ơi cho hỏi sản phẩm này hiện tại bên mình còn không ạ, em mua',
      time: '16:20'
    },
    {
      avatar: '/assets/img/11Avatar.png',
      content: 'Shop ơi cho hỏi sản phẩm này hiện tại bên mình còn không ạ, em mua',
      time: '16:20'
    },
    {
      avatar: '/assets/img/11Avatar.png',
      content: 'Shop ơi cho hỏi sản phẩm này hiện tại bên mình còn không ạ, em mua',
      time: '16:20'
    },
    {
      avatar: '/assets/img/11Avatar.png',
      content: 'Shop ơi cho hỏi sản phẩm này hiện tại bên mình còn không ạ, em mua',
      time: '16:20'
    },
  ]

  pageSize = 20;
  listPageSize = [
    { id: 10, name: 10 },
    { id: 20, name: 'Theo tin nhắn mới' },
    { id: 50, name: 50 },
    { id: 100, name: 100 },
    { id: 200, name: 200 },]
  ngOnInit(): void {
  }
  error(): void {
    this.modal.error({
      title: 'Chặn khách hàng này',
      content: 'Ngừng nhận tin nhắn và cuộc gọi từ Nguyễn Văn Huy',
      onOk: () => console.log(' OK'),
      onCancel: () => { console.log('cancel') },
      okText: "Hủy bỏ",
      cancelText: "Chặn tin nhắn"
    });
  }

  onClickButton(e: MouseEvent) {
    alert('click Button text ');
  }
  onChangePageSize(data:any) {
    console.log(data);
  }
}

import { ReviewShopService } from './../../services/review-shop.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TDSSafeAny, TDSTableQueryParams } from 'tmt-tang-ui';
import { TDSModalRef, TDSModalService } from 'tmt-tang-ui';
import { DTO, FilterStatusItemDTO, listReviewShop } from '../../../dto/evalute-shop/evalute-shop.dto';
// import { listReviewShop, ReviewShopService } from '../../services/review-shop.service';



@Component({
  selector: 'app-evaluate-shop',
  templateUrl: './evaluate-shop.component.html',
  styleUrls: ['./evaluate-shop.component.scss'],
  host: {
    class: 'h-full w-full flex'
  }
})

export class EvaluateShopComponent implements OnInit {
  listOfReviewShop: listReviewShop[] = []
  total = 1;
  loading = true;
  pageSize = 10;
  pageIndex = 1;
  search = '';
  status = 0;
  public selected1 = 1;
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
  // value: number = 4;
  //Filter trạng thái
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
      disabled: false
    },
  ]
  //Filter đánh giá
  star = 0;
  lstStar: Array<FilterStatusItemDTO> = [
    {
      name: 'Tất cả',
      value: 0,
      count: 100,
      disabled: false
    },
    {
      name: '1',
      value: 1,
      count: 20,
      disabled: false
    },
    {
      name: '2',
      value: 2,
      count: 60,
      disabled: false
    },
    {
      name: '3',
      value: 3,
      count: 20,
      disabled: false
    },
    {
      name: '4',
      value: 4,
      count: 20,
      disabled: false
    },

    {
      name: '5',
      value: 5,
      count: 20,
      disabled: false
    },
  ]
  constructor(private modalService: TDSModalService, private reviewshop: ReviewShopService) { }

  ngOnInit(): void {}

  // lấy data list review shop
  loadListReviewShop(pageIndex: number, pageSize: number, search?: string, status?: number): void {
    this.loading = true;
    this.reviewshop.getListReviewShop(pageIndex, pageSize, search, status).subscribe((res: DTO) => {
      if (res) {
        this.listOfReviewShop = res.items;
        this.total = res.totalCount;
      } else {
        this.listOfReviewShop = [];
        this.total = 0;
      }
      this.loading = false;
    }, err => {
      this.loading = false;
      this.listOfReviewShop = [];
      this.total = 0;
    })
  }
  // phân trang
  onQueryParamsChange(params: TDSTableQueryParams): void {
    const { pageSize, pageIndex } = params;
    this.loadListReviewShop(pageIndex, pageSize);
  }
  // tìm kiếm theo tên khách hàng
  searchCustomerName() {
    this.loadListReviewShop(this.pageIndex, this.pageSize, this.search)
  }
  // lọc theo trạng thái
  onSelectChange(value: number) {
    this.resetPage()
    this.loadListReviewShop(this.pageIndex, this.pageSize, '', value)
    console.log('selectChange', value)
  }
  resetPage() {
    this.pageIndex = 1;
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

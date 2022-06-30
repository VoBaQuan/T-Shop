import { ReviewShopService } from './../../services/review-shop.service';
import { Component, OnInit } from '@angular/core';
import { TDSSafeAny, TDSTableQueryParams } from 'tmt-tang-ui';
import { TDSModalService } from 'tmt-tang-ui';
import { DataResultDTO, FilterStarItemDTO, FilterStatusItemDTO, DataListReviewShopDTO } from '../../../dto/evalute-shop/evalute-shop.dto';

@Component({
  selector: 'app-evaluate-shop',
  templateUrl: './evaluate-shop.component.html',
  styleUrls: ['./evaluate-shop.component.scss'],
  host: {
    class: 'h-full w-full flex'
  }
})

export class EvaluateShopComponent implements OnInit {
  listOfReviewShop: DataListReviewShopDTO[] = []
  total = 0;
  totalRatingAverage = 0;
  loading = true;
  pageSize = 10;
  pageIndex = 1;
  search = '';
  status = 0;
  rating = 0;
  filterStatus = 0
  filterRating = 0
  starFilterReview = 0;
  shopId:TDSSafeAny;

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
  //Filter trạng thái
  selected = 0;
  lstStatusFilterReview: Array<FilterStatusItemDTO> = []
  //Filter đánh giá
  star = 0;
  lstStarFilterReview: Array<FilterStarItemDTO> = [
    {
      name: 'Tất cả',
      value: 0,
      count: 0,
      disabled: false
    },
    {
      name: '1',
      value: 1,
      count: 0,
      disabled: false
    },
    {
      name: '2',
      value: 2,
      count: 0,
      disabled: false
    },
    {
      name: '3',
      value: 3,
      count: 0,
      disabled: false
    },
    {
      name: '4',
      value: 4,
      count: 0,
      disabled: false
    },

    {
      name: '5',
      value: 5,
      count: 0,
      disabled: false
    },
  ]
  constructor(private modalService: TDSModalService, private reviewshop: ReviewShopService) { }

  ngOnInit(): void { 
    this.loadStatusReview(this.shopId)
  }

  // lấy data list review shop
  loadListReviewShop(pageIndex: number, pageSize: number, search?: string, status?: number, rating?: number): void {
    this.loading = true;
    this.reviewshop.getListDataReviewShop(pageIndex, pageSize, search, status, rating).subscribe((res: DataResultDTO) => {
      // this.loadStatusReview(res)
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

  //load trạng thái
  loadStatusReview(shopId: any) {
    let rating = this.starFilterReview > 0 ? [this.starFilterReview] : [];
    this.reviewshop.getListStatusForShop( { ShopId: shopId, Rating: rating } ).subscribe(res => {
      // console.log(res)
      this.lstStatusFilterReview = [];
      if (res) {
        let lstStatus = res.map((item: any) => {
          return {
            name: item.text,
            value: item.value,
            count: item.count,
            disabled: false
          }
        }).filter((f: any) => f.value > 0);
        let countAll = 0;
        lstStatus.forEach((f: any) => {
          countAll += f.count;
          // console.log(countAll)
        });
        this.lstStatusFilterReview = [
          {
            name: 'Tất cả',
            value: 0,
            count: countAll,
            disabled: false
          },
          ...lstStatus
        ]
        // console.log(lstStatus)
        // console.log(this.lstStatusFilterReview)
      }
    })
  }

  // phân trang
  onQueryParamsChange(params: TDSTableQueryParams): void {
    const { pageSize, pageIndex } = params;
    this.loadListReviewShop(pageIndex, pageSize, this.search, this.filterStatus, this.filterRating);
  }

  // tìm kiếm theo tên khách hàng
  searchCustomerName() {
    this.resetPage()
    this.loadListReviewShop(this.pageIndex, this.pageSize, this.search, this.filterStatus, this.filterRating)
  }

  // Lọc theo sao
  onSelectChangeRating(value: number) {
    this.resetPage()
    this.loadStatusReview(this.shopId)
    this.filterRating = value
    this.loadListReviewShop(this.pageIndex, this.pageSize, this.search, this.filterStatus, value)
    // console.log('selectChange rating: ', value)
  }

  // lọc theo trạng thái
  onSelectChangeStatus(value: number) {
    this.resetPage()
    this.filterStatus = value
    this.loadListReviewShop(this.pageIndex, this.pageSize, this.search, value, this.filterRating)
    console.log('selectChange status: ', value)
  }

  // reset trang
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

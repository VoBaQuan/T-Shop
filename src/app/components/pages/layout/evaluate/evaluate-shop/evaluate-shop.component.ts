import { ReviewShopService } from './../../services/review-shop.service';
import { Component, OnInit } from '@angular/core';
import { DataResultDTO, FilterStarItemDTO, FilterStatusItemDTO, DataListReviewShopDTO } from '../../../dto/evalute-shop/evalute-shop.dto';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSModalService } from 'tds-ui/modal';
import { TDSTableQueryParams } from 'tds-ui/table';

@Component({
  selector: 'app-evaluate-shop',
  templateUrl: './evaluate-shop.component.html',
  styleUrls: ['./evaluate-shop.component.scss'],
  host: {
    class: 'h-full w-full flex'
  }
})

export class EvaluateShopComponent implements OnInit {

  // Declare
  isVisibleReply = false;
  isVisibleReport = false;
  listOfReviewShop: DataListReviewShopDTO[] = []
  total = 0;
  totalRatingAverage = 0;
  loading = true;
  pageSize = 10;
  pageIndex = 1;
  searchOfCustomerName = '';
  searchOfNumberPhone = '';
  status = 0;
  rating = 0;
  filterStatus = 0
  filterRating = 0
  starFilterReview = 0;
  shopId: TDSSafeAny;
  public selected1 = 1;
  public listData = [
    { id: 1, name: 'Bình luận hông đúng sự thiệt' },
    { id: 2, name: 'Elvis Presley' },
    { id: 3, name: 'Paul McCartney' },
    { id: 4, name: 'Elton John' },
    { id: 5, name: 'Elvis Presley' },
    { id: 6, name: 'Paul McCartney' }
  ]
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
  loadListReviewShop(pageIndex: number, pageSize: number, searchOfText?: string, searchOfNumberPhone?: string, status?: number, rating?: number): void {
    this.loading = true;
    this.reviewshop.getListDataReviewShop(pageIndex, pageSize, searchOfText, searchOfNumberPhone, status, rating).subscribe((res: DataResultDTO) => {
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
    this.reviewshop.getListStatusForShop({ ShopId: shopId, Rating: rating }).subscribe(res => {
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
      }
    })
  }

  // phân trang
  onQueryParamsChange(params: TDSTableQueryParams): void {
    const { pageSize, pageIndex } = params;
    this.loadListReviewShop(pageIndex, pageSize, this.searchOfCustomerName, this.searchOfNumberPhone, this.filterStatus, this.filterRating);
  }

  // tìm kiếm theo tên khách hàng
  searchCustomerName() {
    this.resetPage()
    this.loadListReviewShop(this.pageIndex, this.pageSize, this.searchOfCustomerName, '', this.filterStatus, this.filterRating)
  }

  // Lọc theo sao
  onSelectChangeRating(value: number) {
    this.resetPage()
    this.loadStatusReview(this.shopId)
    this.filterRating = value
    this.loadListReviewShop(this.pageIndex, this.pageSize, this.searchOfCustomerName, this.searchOfNumberPhone, this.filterStatus, value)
  }

  // lọc theo trạng thái
  onSelectChangeStatus(value: number) {
    this.resetPage()
    this.filterStatus = value
    this.loadListReviewShop(this.pageIndex, this.pageSize, this.searchOfCustomerName, this.searchOfNumberPhone, value, this.filterRating)
  }

  // reset page
  resetPage() {
    this.pageIndex = 1;
  }

  // Hiển thị Modal comment, Report
  showModal(isShow: any): void {
    if (isShow == 'comment') {
      this.isVisibleReply = true
    }
    if (isShow == 'report') {
      this.isVisibleReport = true
    }
  }

  // Gửi dữ liệu Modal
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

  // Hủy Modal
  handleCancel(isShow: any): void {
    if (isShow == 'comment') {
      this.isVisibleReply = false
    }
    if (isShow == 'report') {
      this.isVisibleReport = false
    }
  }
}

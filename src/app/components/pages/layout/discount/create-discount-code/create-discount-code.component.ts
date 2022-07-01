import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TDSI18nService } from 'tds-ui/i18n';
import { TDSSafeAny } from 'tds-ui/shared/utility';

interface ItemData {
  id: number;
  image: string,
  productCode: string,
  productName: string,
  evaluate: string,
  price: string,
  wareHouse: string
}

@Component({
  selector: 'app-create-discount-code',
  templateUrl: './create-discount-code.component.html',
  styleUrls: ['./create-discount-code.component.scss']
})
export class CreateDiscountCodeComponent implements OnInit {

  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 !== 0));
        this.refreshCheckedStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 === 0));
        this.refreshCheckedStatus();
      }
    }
  ];

  isVisible = false;

  public listData = [
    { id: 1, name: 'Elton John' },
    { id: 2, name: 'Elvis Presley' },
    { id: 3, name: 'Paul McCartney' },
    { id: 4, name: 'Elton John' },
    { id: 5, name: 'Elvis Presley' },
    { id: 6, name: 'Paul McCartney' }
  ]

  public selected = 0;
  public listData1 = [
    { id: 1, name: 'Elton John' },
    { id: 2, name: 'Elvis Presley' },
    { id: 3, name: 'Paul McCartney' },
    { id: 4, name: 'Elton John' },
    { id: 5, name: 'Elvis Presley' },
    { id: 6, name: 'Paul McCartney' }
  ]

  listOfData1 = [
    {

    }
  ]
  constructor(private i18n: TDSI18nService, private router: Router) { }

  ngOnInit(): void {
    this.listOfData = new Array(5).fill(0).map((_, index) => ({
      id: index,
      image: '/assets/img/Rectangle 2544.png',
      productCode: 'T123456789',
      productName: 'Giày thể thao hiphop đen trắng',
      evaluate: '4.6',
      price: '5.000.000',
      wareHouse: '50',
    }));
  }

  onModelChange(e: TDSSafeAny) {
    console.log(e)
  }

  closeCreateDiscountCode() {
    this.router.navigate(['/pages/giamgia/magiamgia']);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  onSelectChange(value: TDSSafeAny) {
    console.log(value);
  }

  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly ItemData[] = [];
  listOfData: readonly ItemData[] = [];
  setOfCheckedId = new Set<number>();

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly ItemData[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }
}

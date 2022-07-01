import { TDSSafeAny } from "tds-ui/shared/utility"

export interface DataListReviewShopDTO {
    customerName?: string
    customerPhoneNumber?: string
    rating?: number
    reviewMessage?: string
    creationTime?: string
    status?: number
  }
  
  export interface DataResultDTO {
    aggregates: any
    items: DataListReviewShopDTO[]
    totalCount:number
  }

  export interface FilterStatusItemDTO {
    name: string;
    value: TDSSafeAny,
    count: number,
    disabled: boolean,
  }

  export interface FilterStarItemDTO {
    name: string;
    value: TDSSafeAny,
    count: number,
    disabled: boolean,
  }
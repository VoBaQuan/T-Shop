import { TDSSafeAny } from "tmt-tang-ui"

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
    totalCount: number,
    disabled: boolean,
  }

  export interface FilterStarItemDTO {
    name: string;
    value: TDSSafeAny,
    count: number,
    disabled: boolean,
  }
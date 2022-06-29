import { TDSSafeAny } from "tmt-tang-ui"

export interface listReviewShop {
    customerName?: string
    customerPhoneNumber?: string
    rating?: number
    reviewMessage?: string
    creationTime?: string
    status?: number
  }
  
  export interface DTO {
    aggregates: any
    items: listReviewShop[]
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
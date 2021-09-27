export class LinhVuc{
  id?:number ;
  mA_LINH_VUC?:string ;
  teN_LINH_VUC?: string ;
  mO_TA?: string ;
  tranG_THAI?: number ;
  collapsed?:boolean;
  modal?:boolean;
}

export interface Pagination {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  LinhVuc: LinhVuc;
}

export class PaginatedResult<T>{
  resut?: T;
  pagination?: Pagination ;
}

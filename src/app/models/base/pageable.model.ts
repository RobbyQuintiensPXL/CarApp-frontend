import {Sort} from "./sort.model";

export interface Pageable<T> {
  content: T[],
  pageable: {
    sort: Sort<T>,
    pageNumber: number,
    pageSize: number,
    offset: number,
    paged: boolean,
    unpaged: boolean
  },
  totalPages: number,
  totalElements: number,
  last: boolean,
  numberOfElements: number,
  number: number,
  sort: Sort<T>,
  first: boolean,
  size: number,
  empty: boolean
}

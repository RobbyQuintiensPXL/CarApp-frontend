import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Product} from "../../models/product/product";
import {PagedProduct} from "../../components/car-card-list/car-card-list.component";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly urlProducts: string;

  constructor(private http: HttpClient) {
    this.urlProducts = 'car/public/products/';
  }

  getAllProducts(param?: any): Observable<PagedProduct> {
    const search = 'search'
    return this.http.get<any>(this.urlProducts + search, {params: param}).pipe(
      catchError(error => {
        return throwError('No Products Found');
      })
    );
  }
}

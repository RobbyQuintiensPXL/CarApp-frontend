import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Product} from "../../models/product/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly urlProducts: string;

  constructor(private http: HttpClient) {
    this.urlProducts = 'car/public/products/';
  }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.urlProducts).pipe(
      catchError(error => {
        return throwError('No Products Found');
      })
    );
  }
}

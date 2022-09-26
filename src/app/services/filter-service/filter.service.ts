import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Brand} from "../../models/brand/brand";
import {catchError} from 'rxjs/operators';
import {Model} from "../../models/model/model";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private readonly urlBrands: string;
  private readonly urlModels: string;

  constructor(private http: HttpClient) {
  this.urlBrands = 'car/public/brands';
  this.urlModels = 'car/public/models/';
  }

  getAllBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.urlBrands).pipe(
      catchError(error => {
        return throwError('No Brands Found');
      })
    );
  }

  getModelsByBrand(brand: string | undefined): Observable<Model[]> {
    return this.http.get<Model[]>(this.urlModels + brand).pipe(
      catchError( error => {
        return throwError('No Models Found');
      })
    );
  }
}

import {Component, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ProductService} from "../../services/product-service/product-service";
import {Pageable} from "../../models/base/pageable.model";
import {Product} from "../../models/product/product";

@Component({
  selector: 'app-car-card-list',
  templateUrl: './car-card-list.component.html',
  styleUrls: ['./car-card-list.component.css']
})
export class CarCardListComponent implements OnChanges{
  @Input() params!: string;

  pagedProducts: PagedProduct;
  products: Product[];
  rows: number;
  records: number;

  constructor(private productService: ProductService) { }

  ngOnChanges(): void {
    this.listAllProducts(this.params);
  }

  getParams(brand: string) {
    const params: any = {};
    if (brand) {
      params.brand = brand;
    }
    return params;
  }

  listAllProducts(brand?: string): void {
    // const params = this.getParams(this.params);
    this.productService.getAllProducts(this.params).subscribe(product => {
      this.pagedProducts = product;
      this.products = this.pagedProducts.content;
      this.rows = this.pagedProducts.pageable.pageSize;
      this.records = this.pagedProducts.totalElements;
    });
  }
}

export interface PagedProduct extends Pageable<Product> {

}

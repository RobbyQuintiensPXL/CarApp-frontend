import {Component, OnInit, Output} from '@angular/core';
import {ProductService} from "../../services/product-service/product-service";
import {Product} from "../../models/product/product";

@Component({
  selector: 'app-car-card-list',
  templateUrl: './car-card-list.component.html',
  styleUrls: ['./car-card-list.component.css']
})
export class CarCardListComponent implements OnInit {
  products: any;
  product: Product | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listAllProducts();
  }

  listAllProducts(): void {
    this.productService.getAllProducts().subscribe(product => {
      this.products = product.content;
    });

  }
}

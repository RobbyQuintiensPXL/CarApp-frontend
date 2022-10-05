import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product-service/product-service";
import {Subscription} from "rxjs";
import {Product} from "../../models/product/product";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  id: any;
  product: Product;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  getProductById(id: number): Subscription {
    return this.productService.getProductById(id).subscribe(event => {
      this.product = event;
    });
  }

  ngOnInit(): void {
    this.getProductById(this.id);
  }

}

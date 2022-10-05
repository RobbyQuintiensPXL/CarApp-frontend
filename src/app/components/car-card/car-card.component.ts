import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {
  @Input() product: any;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }


}

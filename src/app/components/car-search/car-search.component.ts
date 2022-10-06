import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {
  msgBrand: any;

  constructor() { }

  ngOnInit(): void {
  }

  addBrand(brand: string) {
    this.msgBrand = brand;
    console.log(this.msgBrand);
  }
}

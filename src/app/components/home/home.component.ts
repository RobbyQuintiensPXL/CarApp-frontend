import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  msgBrand: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  addBrand(brand: string) {
    this.msgBrand = brand;
    console.log(this.msgBrand);
  }
}

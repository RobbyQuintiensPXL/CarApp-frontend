import {Component, OnInit} from '@angular/core';
import {FilterService} from "../../services/filter-service/filter.service";
import {Brand} from "../../models/brand/brand";
import {Model} from "../../models/model/model";

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {
  brands: Brand[] | undefined;
  models: Model[] | undefined;
  model: Model | undefined;
  brandSelected: boolean | undefined;
  params: string[] | undefined;

  constructor(private filterService: FilterService) {
  }

  listAllBrands(): void {
    this.filterService.getAllBrands().subscribe(brand => {
      this.brands = brand;
    });
  }

  listAllModelsByBrand(brand: string | undefined): void {
    this.filterService.getModelsByBrand(brand).subscribe(model => {
      this.models = model;
    })
  }

  ngOnInit(): void {
    this.listAllBrands();
  }

  onChangeBrand(brand: string) {
    this.listAllModelsByBrand(brand);
    this.brandSelected = true;
  }

  getParams() {
    console.log('params');
  }
}

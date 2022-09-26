import {Brand} from "../brand/brand";
import {Model} from "../model/model";
import {Version} from "../version/version";

export class Product {

  id?: number;
  brand: Brand;
  model: Model;
  version: Version;
  numberDoors: number;
  transmission: string;
  price: number;
  firstRegistration: Date;
  numberKm: number;
  performance: string;
  images: string[];

  constructor(args: Product) {
    this.id = args?.id;
    this.brand = args.brand;
    this.model = args.model;
    this.version = args.version;
    this.numberDoors = args.numberDoors;
    this.transmission = args.transmission;
    this.price = args.price;
    this.firstRegistration = args.firstRegistration;
    this.numberKm = args.numberKm;
    this.performance = args.performance;
    this.images = args.images;
  }
}

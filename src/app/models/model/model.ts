import {Brand} from "../brand/brand";

export class Model {

  id?: number;
  model: string;
  brand: Brand;

  constructor(args: Model) {
    this.id = args?.id;
    this.model = args.model;
    this.brand = args.brand;
  }
}

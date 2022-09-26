import {Brand} from "../brand/brand";
import {Model} from "../model/model";

export class Version {

  id?: number;
  versionName: string;
  model: Model;
  cylinder: number;
  co2: number;
  emission: string;
  fuelType: string;
  label: string;

  constructor(args: Version) {
    this.id = args?.id;
    this.versionName = args.versionName;
    this.model = args.model;
    this.cylinder = args.cylinder;
    this.co2 = args.co2;
    this.emission = args.emission;
    this.fuelType = args.fuelType;
    this.label = args.label;
  }
}

import {Country} from "../country/country";

export class Brand {

  id?: number;
  brand: string | undefined;
  country: Country | undefined;
  url: string | undefined;
  logoUrl: string | undefined;

  constructor(args?: Brand) {
    this.id = args?.id;
    this.brand = args?.brand;
    this.country = args?.country;
    this.url = args?.url;
    this.logoUrl = args?.logoUrl;
  }
}

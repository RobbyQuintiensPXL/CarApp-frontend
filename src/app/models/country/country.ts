export class Country {

  id?: number;
  countryName: string;

  constructor(args: Country) {
    this.id = args?.id;
    this.countryName = args.countryName;
  }
}

import { Planet } from '../models/planet';

export class PlanetDto {
  public result: Planet;

  constructor(data: any) {
    this.result = new Planet(data);
  }
}

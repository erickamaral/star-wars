export class Planet {
  public id: number;
  public climate: string;
  public diameter: number;
  public gravity: boolean;
  public name: string;
  public population: number;
  public terrain: string;

  constructor({
    name = null,
    climate = null,
    diameter = null,
    gravity = null,
    population = null,
    terrain = null,
    url = null,
   }) {
    this.id = this.captureID(url);
    this.name = name;
    this.climate = climate;
    this.diameter = diameter;
    this.gravity = gravity;
    this.population = population;
    this.terrain = terrain;
  }

  private captureID(url): number {
    return url.split('/').reverse()[1];
  }
}

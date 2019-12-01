import { Planet } from './planet';
import { Film } from './film';
import { Specie } from './specie';
import { Starship } from './starship';

export class Character {
  public id: number;
  public gender: string;
  public name: string;
  public eyeColor: string;
  public hairColor: string;
  public skinColor: string;
  public height: number;
  public mass: number;
  public url: string;
  public homeworld: number;

  constructor({
      gender = null,
      name = null,
      homeworld = null,
      eye_color = null,
      hair_color = null,
      skin_color = null,
      height = null,
      mass = null,
      url = null,
  }) {
    this.id = this.captureID(url);
    this.homeworld = this.captureID(homeworld);
    this.url = url;
    this.gender = gender;
    this.name = name;
    this.eyeColor = eye_color;
    this.hairColor = hair_color;
    this.skinColor = skin_color;
    this.height = height;
    this.mass = mass;
  }

  private captureID(url): number {
    return url.split('/').reverse()[1];
  }
}

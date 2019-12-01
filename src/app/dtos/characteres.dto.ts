import { Character } from '../models/character';

export class CharacteresDto {
  public count: number;
  public results: Character[];

  constructor({
    count = null,
    results = null,
  }) {
    this.count = count;
    this.results = results.map((item: object) => {
      return new Character(item);
    });
  }
}

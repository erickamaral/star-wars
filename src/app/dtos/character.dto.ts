import { Character } from '../models/character';

export class CharacterDto {
  public result: Character;

  constructor(data: any) {
    this.result = new Character(data);
  }
}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CharactersService } from '../../services/characters.service';
import { PlanetsService } from '../../services/planets.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Character } from '../../models/character';
import { CharacterDto } from '../../dtos/character.dto';
import {PlanetDto} from '../../dtos/planet.dto';
import {Planet} from '../../models/planet';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html'
})
export class CharacterComponent implements OnInit {
  public character: Character;
  public homeworld: Planet;

  constructor(
    private location: Location,
    private charactersService: CharactersService,
    private planetsService: PlanetsService,
    private route: ActivatedRoute
  ) {
    this.character = null;
  }

  public ngOnInit(): void {
    this.registerParamSubject();
  }

  public back() {
    this.location.back();
  }

  private registerParamSubject() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.loadCharecter(parseInt(params.get('id'), 10));
      }
    );
  }

  private loadCharecter(id: number) {
    this.charactersService.get(id).subscribe(
      (characterDto: CharacterDto) => {
        this.character = characterDto.result;

        this.planetsService.get(this.character.homeworld).subscribe(
          (planetDto: PlanetDto) => this.homeworld = planetDto.result
        );
      }
    );
  }
}

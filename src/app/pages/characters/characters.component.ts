import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { CharacteresDto } from '../../dtos/characteres.dto';
import { Character } from '../../models/character';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {
  public results: Character[];
  private pageSubject: Subject<number>;
  private pageObservable: Observable<number>;

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute
  ) {
    this.pageSubject = new Subject();
    this.pageObservable = this.pageSubject.asObservable();
    this.results = [];
  }

  public ngOnInit() {
    this.registerParamSubject();
    this.registerPageSubject();
    this.pageSubject.next(1);
  }

  private registerParamSubject() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.pageSubject.next(parseInt(params.get('page'), 10));
      }
    );
  }

  private registerPageSubject() {
    this.pageObservable.subscribe(
      (page: number) => {
        this.loadCharecteres(page);
      }
    );
  }

  private loadCharecteres(page: number) {
    this.charactersService.getAll(page).subscribe(
      (characteresDto: CharacteresDto) => {
        this.results = characteresDto.results;
      }
    );
  }
}

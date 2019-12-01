import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { CharacteresDto } from '../dtos/characteres.dto';
import { CharacterDto } from '../dtos/character.dto';
import { api } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  public getAll(page: number): Observable<CharacteresDto> {
    const url = this.uri(`people?page=${page}`);

    return this.http.get(url)
      .pipe(
        map(response => new CharacteresDto(response)),
        catchError(error => throwError(error.message))
      );
  }

  public get(id: number): Observable<CharacterDto> {
    const url = this.uri(`people/${id}`);

    return this.http.get(url)
      .pipe(
        map(response => new CharacterDto(response)),
        catchError(error => throwError(error.message))
      );
  }

  public uri(url: string): string {
    return `${api.swapi.uri}/${url}`;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { api } from '../../environments/environment';
import { PlanetDto } from '../dtos/planet.dto';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  constructor(private http: HttpClient) {}

  public get(id: number): Observable<PlanetDto> {
    const url = this.uri(`planets/${id}`);

    return this.http.get(url)
      .pipe(
        map(response => new PlanetDto(response)),
        catchError(error => throwError(error.message))
      );
  }

  public uri(url: string): string {
    return `${api.swapi.uri}/${url}`;
  }
}

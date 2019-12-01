import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public loading: Observable<boolean>;
  private loadingSubject: Subject<boolean>;

  constructor() {
    this.loadingSubject = new Subject<boolean>();
    this.loading = this.loadingSubject.asObservable();
  }

  public show() {
    this.loadingSubject.next(true);
  }

  public hide() {
    this.loadingSubject.next(false);
  }
}

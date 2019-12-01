import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {
  public show: boolean;
  private subscription: Subscription;

  constructor(private loadingService: LoadingService) {
    this.show = false;
  }

  ngOnInit() {
    this.subscription = this.loadingService.loading.subscribe(
      (state: boolean) => {
        this.show = state;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

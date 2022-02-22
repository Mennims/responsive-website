import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {
  mobileBreakpoint$: Observable<boolean>;

  constructor(public breakpointObserver: BreakpointObserver) {
    this.mobileBreakpoint$ = this.breakpointObserver
      .observe(['(min-width: 768px)']).pipe(map((state: BreakpointState) => {
        return !state.matches;
      }));
  }
}

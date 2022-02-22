import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WebsiteService } from '../website.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  animations: [
    trigger('hamburguerX', [
      state('hamburguer', style({})),
      state(
        'topX',
        style({
          transform: 'rotate(45deg)',
          transformOrigin: 'left',
          margin: '6px',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      state(
        'bottomX',
        style({
          transform: 'rotate(-45deg)',
          transformOrigin: 'left',
          margin: '6px',
        })
      ),
      transition('* => *', [
        animate('0.2s'),
      ]),
    ]),
  ],
})
export class NavigationBarComponent implements OnInit {
  menuOpenSubject: BehaviorSubject<boolean>;
  mobileBreakpoint$ = this.websiteService.mobileBreakpoint$;

  constructor(private websiteService: WebsiteService) {
    this.menuOpenSubject = new BehaviorSubject<boolean>(false);
  }

  ngOnInit(): void {
    this.mobileBreakpoint$.subscribe(mobileBreakpoint => {
      if (!mobileBreakpoint) {
        this.closeMenu();
      }
    })
  }

  toggleMenu() {
    const state = this.menuOpenSubject.value;
    this.menuOpenSubject.next(!state);
    console.log(state);
  }

  closeMenu() {
    this.menuOpenSubject.next(false);
  }
}

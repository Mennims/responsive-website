import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../website.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  mobileBreakpoint$ = this.websiteService.mobileBreakpoint$;
  constructor(private websiteService: WebsiteService) { }

  ngOnInit(): void {
  }

}

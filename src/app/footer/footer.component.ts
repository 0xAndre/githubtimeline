import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SharedGlobsalService } from '../shared.global';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(
    public router: Router,
    public sharedGlobsalService: SharedGlobsalService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}

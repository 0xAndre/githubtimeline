import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SharedGlobsalService } from '../shared.global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    public router: Router,
    public sharedGlobsalService: SharedGlobsalService
  ) {}
}

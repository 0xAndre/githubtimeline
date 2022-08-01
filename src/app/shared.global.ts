import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SharedGlobsalService {
  constructor(public router: Router) {}

  searchUserProfile(username: string) {
    if (username) {
      this.router.navigate([`/profile/${username}`]);
    }
  }
}

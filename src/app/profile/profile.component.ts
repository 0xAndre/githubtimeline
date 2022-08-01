import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GithubService } from 'src/services/github.service';
import { SharedGlobsalService } from '../shared.global';

import { Follower } from 'src/models/follower.model';
import { UserInfo } from 'src/models/userinfo.model';
import { Repository } from 'src/models/repo.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  username: any;

  followers: Follower[];
  following: Follower[];
  userInfo: UserInfo;
  repos: Repository[];

  // loading
  followersLoading: boolean = false;
  followingLoading: boolean = false;
  profileLoading: boolean = false;

  constructor(
    public route: ActivatedRoute,
    public githubService: GithubService,
    public router: Router,
    public sharedGlobsalService: SharedGlobsalService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.username = this.route.snapshot.paramMap.get('username');

    this.cleanLoading();

    this.getFollowers();
    this.getFollowing();
    this.getUserInfo();
    this.getUserRepos();
  }

  getFollowers() {
    this.githubService
      .getUserFollowers(this.username)
      .subscribe((followers) => {
        this.followers = followers;
        this.followersLoading = true;
      });
  }

  getFollowing() {
    this.githubService
      .getUserFollowing(this.username)
      .subscribe((following) => {
        this.following = following;
        this.followingLoading = true;
      });
  }

  getUserInfo() {
    this.githubService.getUserInfo(this.username).subscribe((userInfo) => {
      this.userInfo = userInfo;
    });
  }

  getUserRepos() {
    this.githubService.getUserRepos(this.username).subscribe((repos) => {
      this.repos = repos.sort((a, b) => {
        return (
          new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf()
        );
      });
      this.profileLoading = true;
    });
  }

  cleanLoading() {
    this.followersLoading = false;
    this.followingLoading = false;
    this.profileLoading = false;
  }
}

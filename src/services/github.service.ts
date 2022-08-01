import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Follower } from 'src/models/follower.model';
import { UserInfo } from 'src/models/userinfo.model';
import { Repository } from 'src/models/repo.model';

@Injectable({ providedIn: 'root' })
export class GithubService {
  private url = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  /** Get User Followers */
  getUserFollowers(username: string): Observable<Follower[]> {
    return this.http
      .get<Follower[]>(`${this.url}/users/${username}/followers`)
      .pipe(catchError(this.handleError<any>(`getting user followers`)));
  }

  /** Get User Following */
  getUserFollowing(username: string): Observable<Follower[]> {
    return this.http
      .get<Follower[]>(`${this.url}/users/${username}/following`)
      .pipe(catchError(this.handleError<any>(`getting user following`)));
  }

  /** Get User Info */
  getUserInfo(username: string): Observable<UserInfo> {
    return this.http
      .get<UserInfo>(`${this.url}/users/${username}`)
      .pipe(catchError(this.handleError<any>(`getting user info`)));
  }

  /** Get User Repos */
  getUserRepos(username: string): Observable<Repository[]> {
    return this.http
      .get<Repository[]>(`${this.url}/users/${username}/repos`)
      .pipe(catchError(this.handleError<any>(`getting user repos`)));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

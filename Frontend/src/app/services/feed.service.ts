import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {API_BASE_URL} from '../config';
import {LoginService} from './login.service';
import {FeedModel} from '../models/Feed.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient, private loginService: LoginService) {
  }

  getUserFeeds(): Observable<[FeedModel]> {
    const userId = this.loginService.getUserId();

    return this.http.get<[FeedModel]>(API_BASE_URL + `/users/${userId}/feeds`);
  }

  getArticlesFromFeed(url): Observable<any> {
    // fix cors error
    const rssJson = 'https://rss2json.com/api.json?rss_url=';

    return this.http.get(rssJson + url);
  }

  addUserFeed(userFeed){
    const userId = this.loginService.getUserId();

    return this.http.post(API_BASE_URL + `/users/${userId}/feeds/`, userFeed);
  }

  deleteUserFeed(feedId): Observable<any> {
    const userId = this.loginService.getUserId();

    return this.http.delete(API_BASE_URL + `/users/${userId}/feeds/${feedId}`);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {UserIdModel} from '../models/UserId.model';
import {LoginModel} from '../models/Login.model';
import {API_BASE_URL} from '../config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(userData: LoginModel): Observable<UserIdModel> {
    return this.http.post<UserIdModel>(API_BASE_URL + '/users/', userData);
  }

  setUserId(userId) {
    localStorage.setItem('userId', userId);
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  logout(){
    localStorage.removeItem('userId');
  }
}

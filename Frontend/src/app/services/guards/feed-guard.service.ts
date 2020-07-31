import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';

import {LoginService} from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class FeedGuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userId = this.loginService.getUserId();

    if (!userId) {
      this.router.navigate(['login']);

      return false;
    }

    return true;
  }
}

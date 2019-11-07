import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationService } from '../services/navigation/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationGuard implements CanActivate {
  constructor(
    private router: Router,
    private navService: NavigationService
  ) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.navService.paramsData) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }   
  }
  
}

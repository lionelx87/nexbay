import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, delay, map, take, tap } from 'rxjs';
import { CustomRoute } from 'src/app/core/models/routing.interface';
import { CustomRoutingService } from 'src/app/core/services/custom-routing.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService,
    private customRoutingService: CustomRoutingService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this.authService.isAuth().pipe(
        take(1),
        map((isLogged) => {
          let allowed: boolean = true;
          if(!isLogged && route.path !== 'auth') {
            this.customRoutingService.go( CustomRoute.LOGIN );
            allowed = false;
          } else if(isLogged && route.path === 'auth') {
            allowed = false;
            this.customRoutingService.go( CustomRoute.HOME );
          }
          console.log('Path: ', route.path);
          console.log('Allowed: ', allowed);
          return allowed;
        })
      );

  }
}

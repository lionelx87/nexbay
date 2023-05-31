import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { CustomRoute } from 'src/app/core/models/routing.interface';
import { CustomRoutingService } from 'src/app/core/services/custom-routing.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService,
    private customRoutingService: CustomRoutingService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
  canLoad({ path: route }: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.authService.isAuth().pipe(
      take(1),
      map(isAuth => {
        const destinyRejected = isAuth ? route === 'auth' : route !== 'auth';
        if (destinyRejected) {
          const redirectedRoute =
            route === 'auth' ? CustomRoute.HOME : CustomRoute.LOGIN;
          this.customRoutingService.go(redirectedRoute);
          return false;
        }
        return true;
      })
    );
  }
}

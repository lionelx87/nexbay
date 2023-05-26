import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CustomRoute } from '../models/routing.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomRoutingService {
  constructor(private router: Router) {}

  go(route: CustomRoute) {
    this.router.navigate([route]);
  }
}

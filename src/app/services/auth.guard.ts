import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
 
    const isLoggedIn = !!localStorage.getItem('user');

    if (!isLoggedIn) {
      this.router.navigate(['/connexion']); 
      return false;
    }

    return true;
  }
}

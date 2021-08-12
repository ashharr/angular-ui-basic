import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  // this service informs router whether load the component or send to login
  // It accesses authService and decides the status.

  status!: boolean;

  constructor(private authService : AuthService, private route: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.status = this.authService.isAuthenticated();
    if(this.status == false){
      this.route.navigate(['/login']);
    }
    return true;
  }


}

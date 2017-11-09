import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';


@Injectable()
export class MyguardGuard implements CanActivate {
  constructor(private user:UserService,
    private router: Router){}
    
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.user.getUserLogged())
      {
        return this.user.getUserLogged();
      }else{
        this.router.navigate(['']);
        return false;
      }


    }
      
}

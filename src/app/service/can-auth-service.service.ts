import { Injectable, TRANSLATIONS } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CanAuthServiceService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    debugger
    //Check logged in or not
    // return true; //Redirection perform
    return true; //Redirection D

     //Check local storage >> Value
    //  if(local >> Value exist) {
    //   return true;
    //  }
    //  else{
    //    return false
    //  }
    
  }
 
}

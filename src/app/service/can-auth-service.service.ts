import { Injectable, TRANSLATIONS } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CanAuthServiceService implements CanActivate {

  constructor(private router : Router){ //Dependency injection

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   
    return true;
    // if(local >> Token >> Exist >> ){
    //   retun true;
    // }
    // else{
    //   nevaite("Logout")
    // }

  }

  
    // debugger
    
// if(localStorage.getItem("token")){
//   return true;
// }
// else{
//   this.router.navigate(["/login"]);
// }

    // if(Check token is exist or not){
    //   return true; //
    // }
    // else{
    //   // return false; 
    //   this.router.navigate(["/login"]);
    // }




  
  
 
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServicesService } from 'src/app/services/authService/authguard-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor( private Authguardservice: AuthguardServicesService, private router: Router ){};

  canActivate() : boolean
  
  {
    if (!this.Authguardservice.gettoken()) {  
      console.log("token expired")
      this.router.navigateByUrl("/login");  
  }  
  return this.Authguardservice.gettoken();  
  }
  
}

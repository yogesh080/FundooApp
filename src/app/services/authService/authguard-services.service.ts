import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServicesService {

  constructor() { }

  gettoken(){

    return !!localStorage.getItem("token");  
  }
}

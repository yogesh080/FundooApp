import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  token:any;

  constructor(private httpService: HttpServiceService) { 
    this.token = localStorage.getItem("token")


  }

  registration(reqdata:any){
    console.log(reqdata)

    let header = {
      Headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    // console.log("cool");
    console.log(reqdata);
    return this.httpService.postService('/User/Register', reqdata, false, header)
  }

  login(reqdata: any)
  {
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    console.log(reqdata);

    return this.httpService.postService('/User/Login', reqdata, false, header)

  }

  forgetPassword(reqdata:any)
  {
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    console.log(reqdata);

    return this.httpService.postService(`/User/ForgetPassword?Email=${reqdata.Email}`,reqdata,false,header)
  }

  ResetPassword(reqdata:any){
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        Authorization: this.token
      })
    }
    console.log(reqdata);

    return this.httpService.putservices('/User/ResetLink',reqdata,true,header)
  }

}

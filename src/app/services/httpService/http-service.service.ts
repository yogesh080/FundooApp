import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class HttpServiceService {

  
  baseUrl= environment.baseurl;

  constructor(private httpClient: HttpClient) { }


  postService(url: string, reqdata: any, token: boolean =false, httpOptions: any={}){
    return this.httpClient.post(this.baseUrl+url, reqdata, token && httpOptions)
  }

  GetService(url:string, token: boolean=false, httpOptions:any)
  {
      return this.httpClient.get(url,token && httpOptions);
  }

  
  // putservices(url: string, reqdata: any, token: boolean = false, httpOptions: any = {}) {
  //   return this.httpClient.put(this.baseUrl + url, reqdata, token && httpOptions);
  // }
  
}
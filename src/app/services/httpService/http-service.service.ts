import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class HttpServiceService {

  
  baseUrl= environment.baseurl;

  constructor(private httpClient: HttpClient) { }


  GetService(url:string, token: boolean=false, httpOptions:any)
  {
      return this.httpClient.get(this.baseUrl+url,token && httpOptions);
  }

  postService(url: string, reqdata: any, token: boolean =false, httpOptions: any={}){
    return this.httpClient.post(this.baseUrl+url, reqdata, token && httpOptions)
  }

  putservices(url: string, reqdata: any, token: boolean = false, httpOptions: any = {}) {
    return this.httpClient.put(this.baseUrl + url, reqdata, token && httpOptions);
  }

  deleteservices(url:string, token:boolean=false, httpOptions:any){
    return this.httpClient.delete(this.baseUrl+url, token && httpOptions)
  }
  
}
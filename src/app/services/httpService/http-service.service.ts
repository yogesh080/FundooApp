import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class HttpServiceService {
  baseUrl= environment.baseurl;

  constructor(private httpClient: HttpClient) { }


  postService(url: string, reqdata: any, token:false, httpOptions: any={}){
    return this.httpClient.post(this.baseUrl+url, reqdata)
  }
  
}
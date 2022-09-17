import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServicesService {
  token:any;


  constructor( private httpService: HttpServiceService) {
    this.token = localStorage.getItem("token")
   }

  //  getallNote()
  // {
  //   let header = {
  //     headers:new HttpHeaders({
  //       'Content-type':'application/json',
  //       'Authorization':"Bearer "+this.token
  //     })
  //   }

  //   return this.httpservice.GetService('https://localhost:44306/api/Notes/Read',true,header)
  // }
  createNote(reqdata:any, token:any){
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer ' + token
      }),
    };
    return this.httpService.postService('/Notes/Create',reqdata,true,header)
  }
}

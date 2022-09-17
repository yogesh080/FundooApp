import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServicesService {
  token:any;


  constructor( private httpservice: HttpServiceService) {
    this.token = localStorage.getItem(`token`)
   }

  createNote(reqdata:any){
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      }),
    };
    return this.httpservice.postService(`/Notes/Create`,reqdata,true,header)
  }
}

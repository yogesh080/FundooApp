import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServicesService {
  token: any;


  constructor(private httpService: HttpServiceService) {
    this.token = localStorage.getItem("token")
  }

  getallNote() {

    this.token = localStorage.getItem('token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }

    return this.httpService.GetService('/Notes/Read', true, header)
  }

  createNote(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      }),
    };
    return this.httpService.postService('/Notes/Create', reqdata, true, header)
  }

  
  DeleteNote(NoteID:any){
    
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+ this.token
      })
    }

    return this.httpService.deleteservices(`Notes/Delete?NoteID=${NoteID}`,true,header); 

  }
}

import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServicesService {
  token: any;



  constructor(private httpService: HttpServiceService ) {
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

    return this.httpService.deleteservices(`/Notes/Delete?NoteID=${NoteID}`,true,header); 

  }

  updateNote(reqdata:any, NoteID:any)
  {
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':"Bearer "+this.token
      })
    }

    return this.httpService.putservices(`/Notes/Update?NoteID=${NoteID}`,reqdata,true,header);
  }

  TrashNote(noteId:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':"Bearer "+this.token
      })
    }

    return this.httpService.putservices(`/Notes/Trash?noteId=${noteId}`,{} ,true,header)
  }

  ArchiveNote(noteId:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':"Bearer "+this.token
      })
    }

    return this.httpService.putservices(`/Notes/Archive?noteId=${noteId}`,{} ,true,header)
  }

  AddColor(NoteID:any,color:any){

    console.log("color====>", NoteID, color)
    let header = {
      headers: new HttpHeaders({

        'Content-type':'application/json',
        'Authorization':"Bearer "+this.token

      })
      
      //Color?NoteID=22&color=white

    }
    console.log("cool",color)
    return this.httpService.putservices(`/Notes/Color?NoteID=${NoteID}&color=${color}`,{}, true, header)
  }
}

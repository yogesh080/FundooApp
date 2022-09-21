import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteServicesService } from 'src/app/services/noteService/note-services.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  NoteID:any;
  title:any;
  description:any

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
    private note:NoteServicesService) { }

  ngOnInit(): void {
    console.log(this.data);
    this.title=this.data.title,
    this.description=this.data.description
    this.NoteID=this.data.notesId
    console.log("NoteId: "+this.NoteID)
    
  }

  onSubmit(){

    let updatedata= {
      NotesId:this.NoteID,
      Title: this.title,
      Description: this.description
      
    
    }
    console.log(updatedata)

    this.note.updateNote(updatedata, this.data.notesId
      ).subscribe((response:any) => {
      console.log("Update response", response)
    }, (error:any) => {
      console.log(error)
    } )
  }

  

}

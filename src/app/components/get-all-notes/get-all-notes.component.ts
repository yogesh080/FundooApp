import { Component, OnInit } from '@angular/core';
import { NoteServicesService } from 'src/app/services/noteService/note-services.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  NoteList=[]

  constructor(private getNote: NoteServicesService ) { }
  

  ngOnInit(): void {
    this.getAllNotes()
    
    }

    getAllNotes(){
      console.log("got all notes")
      this.getNote.getallNote().subscribe((response:any)=>{
        console.log(response)
        this.NoteList = response.data;

        console.log(this.NoteList)

        this.NoteList = this.NoteList.filter((object:any)=>{
          return object.trash === false && object.archive === false
        })

      })

    }

    colorMessage(event:any){
      this.getAllNotes();
    }
  }



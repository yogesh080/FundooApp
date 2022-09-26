import { Component, OnInit } from '@angular/core';
import { NoteServicesService } from 'src/app/services/noteService/note-services.service';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  notedata=[];
  archiveNotes : any;
  isArchive = false;


  constructor(private note: NoteServicesService) { }

  ngOnInit(): void {
    return this.getAllNoteArchive();

  }

  getAllNoteArchive(){
    console.log("Note for Archive")
    this.note.getallNote().subscribe((response: any) => {
      console.log("request data from archive", response)
      this.notedata = response.data
      console.log(this.notedata)

      this.notedata = this.notedata.filter((obj:any) => {
        return obj.trash === false && obj.archive === true;
      })
    })
  }


  unarchiveMessage(event:any){
    this.getAllNoteArchive();
  }

  
  colorMessage(event:any){
    this.getAllNoteArchive();
  }

  trashMessage(event:any){
    this.getAllNoteArchive();
  }

}

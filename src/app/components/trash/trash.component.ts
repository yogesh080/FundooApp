import { Component, Input, OnInit } from '@angular/core';
import { NoteServicesService } from 'src/app/services/noteService/note-services.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {


  // @Input() NotesArray:any;
  notedata=[];

  constructor(private note: NoteServicesService) { }

  ngOnInit(): void {
    this.getAllNoteTrash();
  }

  getAllNoteTrash(){
    console.log("Note for trash")
    this.note.getallNote().subscribe((response: any) => {
      console.log("request data from bin", response)
      this.notedata = response.data;
      this.notedata = this.notedata.filter((obj:any) => {
        return obj.trash === true && obj.archive === false;
      })

      console.log(this.notedata)
    })
  }

}

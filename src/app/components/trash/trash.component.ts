import { Component, Input, OnInit } from '@angular/core';
import { NoteServicesService } from 'src/app/services/noteService/note-services.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  trashNotes :any;

  @Input() NotesArray:any;

  constructor(private note: NoteServicesService) { }

  ngOnInit(): void {
    this.getAllNoteTrash();
  }

  getAllNoteTrash(){
    console.log("Note for trash")
    this.note.getallNote().subscribe((request: any) => {
      console.log("request data", request)
      this.trashNotes = request.data

      console.log(this.trashNotes)
    })
  }

}

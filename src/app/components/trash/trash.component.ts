import { Component, Input, OnInit } from '@angular/core';
import { NoteServicesService } from 'src/app/services/noteService/note-services.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  trashNotes :[];
  @Input() NotesArray:any;

  constructor(private note: NoteServicesService) { }

  ngOnInit(): void {
  }

  getAllNoteTrash(){
    console.log("Note for trash")
    this.note.getallNote().subscribe((response: any) => {
      console.log("request data", response)
      this.trashNotes = response.data

      console.log(this.trashNotes)
    })
  }

}

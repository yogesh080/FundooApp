import { Component, Input, OnInit } from '@angular/core';
import { NoteServicesService } from 'src/app/services/noteService/note-services.service';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() NotesArray: any;


  constructor(private note:NoteServicesService) { }

  ngOnInit(): void {
  }

  delete(){
    console.log(this.NotesArray.notesId);
    
    this.note.DeleteNote(this.NotesArray.notesId).subscribe((response:any) => {
      console.log("Note Deleted Successfully", response.data);
    }, (error: any) => {
      console.log(error);
    })
  
  }

}

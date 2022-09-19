import { Component, Input, OnInit } from '@angular/core';
import { NoteServicesService } from 'src/app/services/noteService/note-services.service';

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
    console.log(this.NotesArray.NoteID);
    
    this.note.DeleteNote(this.NotesArray.NoteID).subscribe((response:any) => {
      console.log("Note Deleted Successfully", response.data);
    }, (error: any) => {
      console.log(error);
    })
  
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { NoteServicesService } from 'src/app/services/noteService/note-services.service';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() NotesList:any;
  

  constructor(private note:NoteServicesService) { }

  ngOnInit(): void {

    console.log("Note list in icon: " + this.NotesList);

  }

  delete(){
    console.log(this.NotesList.notesId);
    
    this.note.DeleteNote(this.NotesList.notesId).subscribe((response:any) => {
      console.log("Note Deleted Successfully", response);
    }, (error: any) => {
      console.log(error);
    })
  
  }

}

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



  Allcolors = [{code:"#ffffff", name:"White"},{code:"#FF6347", name:"Orange"},{code:"#FF4500", name:"Red"},{code:"#FFFF00", name:"Yellow"},{code:"#ADFF2F", name:"Green"},{code:"#43C6DB", name:"Blue"},
  {code:"#728FCE", name:"Teal"},{code:"#2B65EC", name:"DarkBlue"},{code:"#D16587", name:"Purple"},{code:"#F9A7B0", name:"Pink"},{code:"#E2A76F", name:"Brown"},{code:"#D3D3D3", name:"Gray"}];
  

  constructor(private note:NoteServicesService) { }

  ngOnInit(): void {

    console.log("Note list in icon: " + this.NotesList);

  }

  Trash(){
    console.log(this.NotesList.notesId);
    
    this.note.TrashNote(this.NotesList.notesId).subscribe((response:any) => {
      console.log("Note Trash Successfully", response);
    }, (error: any) => {
      console.log(error);
    })
  
  }

  Archive(){
    console.log(this.NotesList.notesId);
    
    this.note.ArchiveNote(this.NotesList.notesId).subscribe((response:any) => {
      console.log("Note Archived Successfully", response);
    }, (error: any) => {
      console.log(error);
    })
  
  }

  Color(color:any){
    console.log("hello====>", color);

    
    this.note.AddColor(this.NotesList.notesId, color).subscribe((response:any) => {
      console.log("color changed Successfully", response);
    }, (error: any) => {
      console.log(error);
    })

  }

}

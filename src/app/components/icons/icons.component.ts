import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteServicesService } from 'src/app/services/noteService/note-services.service';
import { TrashComponent } from '../trash/trash.component';
import { GetAllNotesComponent } from '../get-all-notes/get-all-notes.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ArchiveComponent } from '../archive/archive.component';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() NotesList:any;


  @Output() ColorEvent = new EventEmitter<string>();
  @Output() TrashEvent = new EventEmitter<string>();
  @Output() ArchiveEvent = new EventEmitter<string>();
  @Output() UnarchiveEvent = new EventEmitter<string>();
  @Output() DeleteEvent = new EventEmitter<string>();

  isDisplaynoteComponent=false;
  isArchiveComponent=false;
  isTrashComponent=false;





  Allcolors = [{code:"#FF6347", name:"Orange"},{code:"#FF4500", name:"Red"},{code:"#FFFF00", name:"Yellow"},{code:"#ADFF2F", name:"Green"},{code:"#43C6DB", name:"Blue"},
  {code:"#728FCE", name:"Teal"},{code:"#D16587", name:"Purple"},{code:"#ffffff", name:"White"}];
  

  constructor(private note:NoteServicesService,private route: ActivatedRoute, private Route: Router) { }

  ngOnInit(): void {


    let Component = this.route.snapshot.component;


    if(Component == GetAllNotesComponent)
    {
      this.isDisplaynoteComponent=true;
    }

    if(Component == TrashComponent)
    {
      this.isTrashComponent=true;
    }

    if(Component == ArchiveComponent)
    {
      this.isArchiveComponent=true;
    }

    console.log("Note list in icon: " + this.NotesList);

  }


  Delete(){
    console.log(this.NotesList.notesId)

    this.note.DeleteNote(this.NotesList.notesId).subscribe((response:any)=> {
      console.log("Note Deleted Succesfully", response);
      this.DeleteEvent.emit(response)
    }, (error: any) => {
      console.log(error);
    })
  }

  Trash(){
    console.log(this.NotesList.notesId);
    
    this.note.TrashNote(this.NotesList.notesId).subscribe((response:any) => {
      console.log("Note Trash Successfully", response);
      this.TrashEvent.emit(response);
    }, (error: any) => {
      console.log(error);
    })
  
  }

  Archive(){
    console.log(this.NotesList.notesId);
    
    this.note.ArchiveNote(this.NotesList.notesId).subscribe((response:any) => {
      console.log("Note Archived Successfully", response);
      this.ArchiveEvent.emit(response)
    }, (error: any) => {
      console.log(error);
    })
  
  }

  Unarchive(){
    console.log(this.NotesList.notesId);
    
    this.note.ArchiveNote(this.NotesList.notesId).subscribe((response:any) => {
      console.log("Note Unarchived Successfuly", response);
      this.UnarchiveEvent.emit(response);
    }, (error: any) => {
      console.log(error);
    })
  }

  Color(color:any){
    console.log("hello====>", color);

    
    this.note.AddColor(this.NotesList.notesId, color).subscribe((response:any) => {
      console.log("color changed Successfully", response);
      this.ColorEvent.emit(response);
    }, (error: any) => {
      console.log(error);
    })

  }

}

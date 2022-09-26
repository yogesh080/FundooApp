import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

 
  @Input() NotesArray: any;


  @Output() ColorEvent = new EventEmitter<string>();
  @Output() TrashEvent = new EventEmitter<string>();
  @Output() ArchiveEvent = new EventEmitter<string>();
  @Output() UnarchiveEvent = new EventEmitter<string>();
  @Output() DeleteEvent = new EventEmitter<string>();


  Search:any = '';




  
  constructor( public dialog: MatDialog, private dataservice: DataServiceService ) { }

  ngOnInit(): void {
    this.dataservice.currentMessage.subscribe(message => {
      console.log(message)
      this.Search = message

      
    })
    console.log("Get all notes", this.NotesArray);
  }


  openDialog(note:any) {
    this.dialog.open(UpdateNoteComponent,{
      data:note,
    });
  }

  colorMessage(event: any){
    this.ColorEvent.emit("color changed reloaded");
  }

  trashMessage(event:any){
    this.TrashEvent.emit("Reload Page after trash")
  }

  archiveMessage(event:any){
    this.ArchiveEvent.emit("reload done archive")
  }

  unarchiveMessage(event:any){
    this.UnarchiveEvent.emit("Reload page after unarchive")
  }

  deleteMessage(event:any){
    this.DeleteEvent.emit("Reload ");
  }


}

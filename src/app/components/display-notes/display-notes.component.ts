import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  @Input() NotesArray: any;



  
  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("Get all notes", this.NotesArray);
  }


  openDialog(note:any) {
    this.dialog.open(UpdateNoteComponent,{
      data:note,
    });
  }


}

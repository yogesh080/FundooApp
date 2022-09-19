import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  @Input() NotesArray: any;


  
  constructor( ) { }

  ngOnInit(): void {
    console.log("Get all notes", this.NotesArray);
  }


}

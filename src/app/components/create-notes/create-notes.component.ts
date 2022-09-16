import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {

  show = false;
  noteform = FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onOpen() {
    this.show = true;
  }
  createNote(){
    this.show=false;
  }

}

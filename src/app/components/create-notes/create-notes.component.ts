import { Component, OnInit } from '@angular/core';
import { NoteServicesService } from 'src/app/services/noteService/note-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {

  noteForm: FormGroup;
  show = false;

  constructor(private note: NoteServicesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.noteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]

    });
  }


  onOpen() {
    this.show = true;
  }

  
  onSubmit() {
    this.show = false;

    if (this.noteForm.valid) {
      let reqdata = {
        Title: this.noteForm.value.title,
        Description: this.noteForm.value.description,
      };

      this.note.createNote(reqdata).subscribe((response: any) => {
        console.log( response);
        
      },
        (error: any) => {
          console.log(error)
        }

      )
    }
    else {
      return;
    }
  }

}

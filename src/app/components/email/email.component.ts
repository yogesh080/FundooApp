import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  forgetEmailForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user: UserServiceService) {
    
   }

  ngOnInit() {
    this.forgetEmailForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required,Validators.minLength(6)]
    }
    // , {
    //   validator: MustMatch('password', 'confirmPassword')
    // }
    );
  }

  // convenience getter for easy access to form fields
  get f() { return this.forgetEmailForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgetEmailForm.valid) {
      let reqdata = {
        Password: this.forgetEmailForm.value.password,
        confirmPassword:this.forgetEmailForm.value.password

      }
      console.log("cool")
      this.user.forgetPassword(reqdata).subscribe((response:any) => {
        console.log(response)
      },error => {
        console.log(error)
      })
    }
    else{
      return;
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  // onReset() {
  //   this.submitted = false;
  //   this.registerForm.reset();
  // }

}

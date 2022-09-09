import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})


export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserServiceService) {
    
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.nullValidator]
    }
    // , {
    // //   validator: MustMatch('password', 'confirmPassword')
    // }
    );
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      let reqdata ={
        FirstName: this.registerForm.value.firstName,
        LastName: this.registerForm.value.lastName,
        Email: this.registerForm.value.Email,
        Password: this.registerForm.value.email
      }
      this.user.registration(reqdata).subscribe((response:any) => {
        console.log(response)

      }, error => {
        console.log(error)
      }
      )
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  // onReset() {
  //   this.submitted = false;
  //   this.registerForm.reset();
  // }

}

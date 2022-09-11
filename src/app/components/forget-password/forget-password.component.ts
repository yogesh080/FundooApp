import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user: UserServiceService) {
    
   }

  ngOnInit() {
    this.forgetPasswordForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]]
    }
    // , {
    //   validator: MustMatch('password', 'confirmPassword')
    // }
    );
  }

  // convenience getter for easy access to form fields
  get f() { return this.forgetPasswordForm.controls; }

  onSubmit() {
    this.submitted = true;

    console.log("cool")

    // stop here if form is invalid
    if (this.forgetPasswordForm.valid) {
      let reqdata = {
        Email: this.forgetPasswordForm.value.email,
      }
      console.log("cool")
      this.user.forgetPassword(reqdata).subscribe((response:any) => {
        console.log(response)
        console.log("cool")
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

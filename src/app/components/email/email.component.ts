import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {


//   this.token = this.activeRoute.snapshot.paramMap.get('token');
//     console.log(this.token);
// private activeRoute: ActivatedRoute

  forgetEmailForm: FormGroup;
  submitted = false;
  token: any;


  constructor(private formBuilder: FormBuilder,private user: UserServiceService, private activeRoute: ActivatedRoute) {

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
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }

  // convenience getter for easy access to form fields
  get f() { return this.forgetEmailForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    // if (this.forgetEmailForm.valid) {

      let reqdata = {
        Password: this.forgetEmailForm.value.password,
        confirmPassword:this.forgetEmailForm.value.password
      }

      console.log("cool")
      this.user.ResetPassword(reqdata,this.token).subscribe((response:any) => {
        console.log(response)
      },error => {
        console.log(error)
      }
      )

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  // onReset() {
  //   this.submitted = false;
  //   this.registerForm.reset();
  // }

}
// }

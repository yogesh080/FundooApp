import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user: UserServiceService) {
    
   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({   
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    }
    // , {
    //   validator: MustMatch('password', 'confirmPassword')
    // }
    );
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.valid) {
      let reqdata ={
        Email: this.loginForm.value.email,
        Password: this.loginForm.value.password
      }
      this.user.login(reqdata).subscribe((response:any) => {
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

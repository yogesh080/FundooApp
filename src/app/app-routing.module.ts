import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
  {path:'registration', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'forgetemail', component:EmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [RegistrationComponent,LoginComponent]

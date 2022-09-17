import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { EmailComponent } from './components/email/email.component';
// given emailcomponents password and confirm password for reset link
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { IconsComponent } from './components/icons/icons.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'User/ResetPassword/:token', component: EmailComponent },
  { path: 'icon', component: IconsComponent },

  
  // {
  //   path: 'dashboard', component: DashboardComponent,
  //   children: [
  //     { path: 'notes', component: GetAllNotesComponent }
  //   ]
  // }
  { path: 'dashboard', component: DashboardComponent,
    children:[{ path: 'note', component:GetAllNotesComponent},]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [RegistrationComponent,LoginComponent]

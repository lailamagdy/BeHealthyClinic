import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: 'signup',component:SignupComponent},
  {path: 'signin',component:SigninComponent},
  {path:'user-page',component:UserPageComponent},
  {path:'admin',component:AdminComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, data: {},
    children: [
      { path: 'login', component: LoginComponent, data: { title: 'login' } },
      { path: 'signin', component: SigninComponent, data: { title: 'signin' } },
      { path: 'signup', component: SignupComponent, data: { title: 'signup' } },
      { path: 'forget-pass', component: ForgetPasswordComponent, data: { title: 'forget-pass' } },
      { path: 'reset-pass', component: ResetPasswordComponent, data: { title: 'reset-pass' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

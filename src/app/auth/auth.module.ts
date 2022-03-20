import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    SigninComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ]
})
export class AuthModule { }

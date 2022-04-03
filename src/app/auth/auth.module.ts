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
import { FormsModule } from '@angular/forms';
import { SignupStepsComponent } from './signup-steps/signup-steps.component';
import { StepsModule } from 'primeng/steps';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    SigninComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    HomeComponent,
    SignupStepsComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    StepsModule,
    DropdownModule,
  ]
})
export class AuthModule { }

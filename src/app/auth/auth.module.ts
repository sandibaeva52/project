import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class AuthModule { }

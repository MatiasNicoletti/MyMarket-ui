import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwsAuthService } from './auth/aws-auth.service';
import { HttpService } from './http/http.service';
import { AuthService } from './auth/auth.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AwsAuthService,
    HttpService,
    AuthService
  ]
})
export class CoreModule { }

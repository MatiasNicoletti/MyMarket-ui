import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwsAuthService } from './auth/aws-auth.service';
import { HttpService } from './http/http.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AwsAuthService,
    HttpService
  ]
})
export class CoreModule { }

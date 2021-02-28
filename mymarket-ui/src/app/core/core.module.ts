import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwsAuthService } from './auth/aws-auth.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AwsAuthService
  ]
})
export class CoreModule { }

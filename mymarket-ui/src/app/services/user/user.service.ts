import { Injectable } from '@angular/core';
import { AwsAuthService } from 'src/app/core/auth/aws-auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authAwsService: AwsAuthService
  ) { }

  hostedUISignin(){
    this.authAwsService.hostedUISignin();
  }
}

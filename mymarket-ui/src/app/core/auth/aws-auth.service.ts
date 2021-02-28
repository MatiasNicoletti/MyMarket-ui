import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AwsAuthService {

  constructor() {
    Auth.configure({
      userPoolId: 'us-east-1_yDfTFoLuS',
      userPoolWebClientId: '6l0heshj0qfjp51lpitpp4bbf4',
      //necesitamos proveer estos campos si usamos un metodo de autenticacion federado (google, facebook, etc.)
      oauth: {
        region: 'us-east-1',
        domain: 'mymarket.auth.us-east-1.amazoncognito.com',
        scope: ['email', 'openid', 'aws.cognito.signin.user.admin'],
        redirectSignIn: 'https://mymarket.vercel.app',
        redirectSignOut: 'https://mymarket.vercel.app',
        responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
      } 
    })
   }

  hostedUISignin(){
    Auth.federatedSignIn().then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }
}

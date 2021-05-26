import { Injectable } from '@angular/core';
import { Auth, Hub } from 'aws-amplify';
import { CognitoUser, ISignUpResult } from 'amazon-cognito-identity-js'
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AwsAuthService {

  constructor(
    private authService: AuthService,
  ) {

    Auth.configure({
      userPoolId: 'us-east-1_ew3IKw5Sl',
      userPoolWebClientId: 'q2n9pbdvrqc4qm8ht3tbtqhl8',
      //necesitamos proveer estos campos si usamos un metodo de autenticacion federado (google, facebook, etc.)
      oauth: {
        region: 'us-east-1',
        domain: 'mymarket.auth.us-east-1.amazoncognito.com',
        scope: ['email', 'openid', 'aws.cognito.signin.user.admin'],
        redirectSignIn: 'https://127.0.0.1:4200/registrarme',
        redirectSignOut: 'https://127.0.0.1:4200',
        responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
      }
    })
  }

  hostedUISignin() {
    Auth.federatedSignIn().then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });


  }

  listen() {
    // console.log('llego al listen')
    Hub.listen("auth", async ({ payload: { event, data } }) => {
      //tanto en eventos de signIn y signOut cargamos al current user y hacemos update a la UI
      // console.log(event, data)
      switch (event) {
        case "signIn":
          // console.log('signin');
          var currentUser:any = <CognitoUser>(await Auth.currentAuthenticatedUser());
          // console.log('getCurrentUser', currentUser.attributes.email);
          // console.log('getCurrentUser', currentUser);
          this.authService.login(currentUser.attributes.email);
          break;
        case "signOut":
          console.log('signOut')
          break;
        case "customOAuthState":
          alert('custom state')
      }
    });
  }
}

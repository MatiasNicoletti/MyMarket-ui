import { Component, OnInit } from '@angular/core';
import { AwsAuthService } from './core/auth/aws-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mymarket-ui';

  constructor(
    private aws: AwsAuthService
  ){}
  ngOnInit(): void {
    this.aws.listen();
  }

  

  
}

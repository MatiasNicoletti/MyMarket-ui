import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html'
})
export class HomeContentComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onClick(){
    this.userService.hostedUISignin();
  }
}

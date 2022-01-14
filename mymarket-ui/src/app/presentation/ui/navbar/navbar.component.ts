import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { HttpService } from 'src/app/core/http/http.service';
import { User } from 'src/app/models/user';
import { CommonService } from 'src/app/services/common/common.service';
import { OfferService } from 'src/app/services/offer/offer.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  currentUser:User;
  constructor(
    private userService: UserService,
    private offerService: OfferService,
    private authService: AuthService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    const item = localStorage.getItem('email');
    if(item){
      this.currentUser = new User();
      this.currentUser.email = item;
    }
    this.authService.getUserSubscription().subscribe((res:User) => {
      this.currentUser = res;
      console.log(res);
    })
  }

  onClick(){
    this.userService.hostedUISignin();
  }

  onClickOpenCart(){
    this.commonService.emitData({openCart: true});
  }

} 

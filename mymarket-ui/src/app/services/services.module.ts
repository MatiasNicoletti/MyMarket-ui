import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user/user.service';
import { OfferService } from './offer/offer.service';
import { BusinessService } from './business/business.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    OfferService,
    BusinessService
  ]
})
export class ServicesModule { }

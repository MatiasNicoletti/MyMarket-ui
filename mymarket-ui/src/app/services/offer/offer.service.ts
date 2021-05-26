import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(
    private httpService:HttpService,
    private router: Router
  ) { }

  getOffers(){

    return this.httpService.getOffers();
  }

  postOffer(offer){
    return this.httpService.postOffer(offer);
  }

  async getProductByName(name){
    return this.httpService.getProduct(name);
  }

  getOfferById(id){

  }


}

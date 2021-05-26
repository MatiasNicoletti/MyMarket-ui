import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'src/app/utils/urls';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  postOffer(offer){
    return this.http.post(url.OFFER_URL + '/offer', offer);
  }

  getOffers(){
    return this.http.get(url.OFFER_URL  + '/offer');
  }

  getOffersByUserId(){
    return this.http.get(url.OFFER_URL  + '/offer');
  }

  getBranchesByUserId(userId:number){
    return this.http.get(url.OFFER_URL + '/business/branches/' + userId);
  }

  getProduct(name:string){
    return this.http.get(url.OFFER_URL + '/offer/product/name/' + name);
  }

  postBusiness(stores){
    return this.http.post(url.OFFER_URL + '/business', stores);
  }

  getUserIdByEmail(email:string){
    return this.http.get(url.OFFER_URL + '/business/user/' + email);
  }
}

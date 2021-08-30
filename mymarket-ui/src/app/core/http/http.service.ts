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

  getOffers(productName?:string){
    return this.http.get(url.OFFER_URL  + `/offer/?name=${productName}`);
  }

  deleteOneOffer(id){
    return this.http.delete(url.OFFER_URL + '/offer/' + id);
  }

  getOfferById(id){
    return this.http.get(url.OFFER_URL + '/offer/' + id);
  }
  
  getOffersByUserId(userID:any){
    return this.http.get(url.OFFER_URL  + '/offer/user/' + userID);
  }

  getBranchesByUserId(userId:number){
    return this.http.get(url.OFFER_URL + '/branches/branches/' + userId);
  }

  getProduct(name:string){
    return this.http.get(url.OFFER_URL + '/offer/product/name/' + name);
  }

  postBusiness(stores){
    return this.http.post(url.OFFER_URL + '/business', stores);
  }

  getUserIdByEmail(email:string){
    return this.http.get(url.OFFER_URL + '/user/' + email);
  }

  updateOffer(offer){
    return this.http.put(url.OFFER_URL + '/offer', offer);
  }

  getBranchById(id) {
    return this.http.get(url.OFFER_URL + '/branches?id=' + id)
  }
}

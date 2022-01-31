import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(
    private httpService:HttpService
  ) { }

  getOffers(productName?:string){

    return this.httpService.getOffers(productName);
  }

  getOffersByUserId(userID:any){
    return this.httpService.getOffersByUserId(userID);
  }

  postOffer(offer){
    return this.httpService.postOffer(offer);
  }

  async getProductByName(name){
    return this.httpService.getProduct(name);
  }

  getOfferById(id){
    return this.httpService.getOfferById(id);
  }

  updateOne(offer){
    return this.httpService.updateOffer(offer);
  }

  deleteOne(id) {
    return this.httpService.deleteOneOffer(id);
  }
}

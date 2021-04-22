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

  getOffers(query?){
    return query? this.http.get(url.OFFER_URL + query) : this.http.get(url.OFFER_URL);
  }

  getPhotoByProductId(productID){

    return this.http.get('http://localhost:3000/authors/product/id/'+productID);
  }
}

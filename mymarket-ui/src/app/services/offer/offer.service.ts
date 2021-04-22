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

  getOffers(query?){
    // this.httpService.getOffers().subscribe(response => {
    //   console.log(response);
    // })
    query = ''
    // console.log(this.router.url);
    return this.httpService.getOffers(this.router.url);
  }

  getPhotoByProductId(productId){
    return this.httpService.getPhotoByProductId(productId)
  }
}

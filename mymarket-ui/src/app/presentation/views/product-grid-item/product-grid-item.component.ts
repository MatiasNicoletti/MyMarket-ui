import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from 'src/app/services/offer/offer.service';

@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html'
})
export class ProductGridItemComponent implements OnInit {
  isDiscountPrice = true;
  @Input('offer') offer;
  constructor(
    private router: Router,
    private offerService: OfferService
  ) { }

  ngOnInit(): void {
    
    this.offer.discount = (this.offer.price*100)/this.offer.oldPrice;
    this.offerService.getPhotoByProductId(this.offer.productID).subscribe(response => {
      this.offer.imageUrl = response;
      console.log(this.offer)
    });
    console.log(this.offer)
  }

  onClick(){
    this.router.navigate(['oferta'])
  }
}

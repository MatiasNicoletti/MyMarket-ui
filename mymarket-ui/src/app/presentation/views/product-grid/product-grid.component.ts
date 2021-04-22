import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from 'src/app/services/offer/offer.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html'
})
export class ProductGridComponent implements OnInit {
  productWanted:string;
  offers:[];
  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.productWanted = params.producto;
      
    })
    this.offerService.getOffers(this.router.url).subscribe((response:any) => {
      console.log(response.data);
      this.offers = response.data;
    });
  }

}

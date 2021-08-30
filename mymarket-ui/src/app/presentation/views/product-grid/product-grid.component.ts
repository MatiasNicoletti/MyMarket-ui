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
      this.productWanted = params.nombre;
      this.offerService.getOffers(this.productWanted).subscribe((response:any) => {
        this.offers = response.data;
      });
    })
  }

}

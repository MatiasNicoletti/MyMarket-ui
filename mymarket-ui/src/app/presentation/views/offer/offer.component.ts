import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { BusinessService } from 'src/app/services/business/business.service';
import { OfferService } from 'src/app/services/offer/offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html'
})
export class OfferComponent implements OnInit {
  offer;
  discount:number;
  branches:any[] = [];
  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
    private businessService: BusinessService
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe(res => {
      console.log(res)
      this.offerService.getOfferById(res.offerId).subscribe((res:any) => {
        this.offer = res.data
        this.discount = 100 - ((this.offer.price * 100)/this.offer.oldPrice);
        console.log(res)
        this.offer.branchIDs.forEach(element => {
          this.businessService.getBranchById(element).subscribe((res:any) => {
            console.log(res)
            this.branches.push(res.data)
          })
        });
      })
    })
  }

  

}

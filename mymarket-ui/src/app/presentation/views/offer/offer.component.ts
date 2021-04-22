import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html'
})
export class OfferComponent implements OnInit {
  @Input('offer') offer;
  constructor() { }
  ngOnInit(): void {
    console.log(this.offer)
  }

  

}

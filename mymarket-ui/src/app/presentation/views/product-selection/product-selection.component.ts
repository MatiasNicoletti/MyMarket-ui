import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html'
})
export class ProductSelectionComponent implements OnInit {

  productWanted
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.productWanted = params['producto'];
      // console.log(this.productWanted)
    });
  }

}

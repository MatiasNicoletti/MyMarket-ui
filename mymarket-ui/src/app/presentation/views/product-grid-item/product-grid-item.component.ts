import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html'
})
export class ProductGridItemComponent implements OnInit {
  isDiscountPrice = true;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClick(){
    // this.router.navigate(['producto'])
    // console.log('aca')
  }
}

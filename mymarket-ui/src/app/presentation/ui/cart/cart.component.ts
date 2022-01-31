import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  cartItems: [] = [];
  counter = 0;

  constructor(
  ) { }

  ngOnInit(): void {
    
  }

  onAddItem(){
    this.counter += 1;
  }

  onSubtractItem(){
    if(this.counter > 0){
      this.counter -= 1;
    }
  }
}

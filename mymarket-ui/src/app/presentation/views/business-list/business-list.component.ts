import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BusinessService } from 'src/app/services/business/business.service';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html'
})
export class BusinessListComponent implements OnInit {

  stores:[] = [];
  constructor(
    private businessService: BusinessService
  ) { }

  ngOnInit(): void {
    this.businessService.getStoreListSubscription().subscribe((response:[]) => {
      // console.log('llego', response);
      this.stores = response;
    })
  }
  
}

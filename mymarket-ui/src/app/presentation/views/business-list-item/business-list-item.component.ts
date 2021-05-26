import { Component, Input, OnInit } from '@angular/core';
import { BusinessStore } from 'src/app/models/businessStore';
import { BusinessService } from 'src/app/services/business/business.service';

@Component({
  selector: 'app-business-list-item',
  templateUrl: './business-list-item.component.html'
})
export class BusinessListItemComponent implements OnInit {
  @Input('store') store:BusinessStore;
  constructor(
    private businessService: BusinessService
  ) { }

  ngOnInit(): void {
    console.log(this.store.address);
  }
  OnDeleteStore(){
    this.businessService.deleteStore(this.store.id);
  }
}

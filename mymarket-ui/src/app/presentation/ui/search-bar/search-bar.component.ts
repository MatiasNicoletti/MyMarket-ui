import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { OfferService } from 'src/app/services/offer/offer.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup;
  productName: string;
  constructor(
    private router: Router,
    private commonService: CommonService,
    private offersService: OfferService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onInputChange(event){
    
    this.productName = event.target.value;
    
    // this.commonService.emitData({productName:event.target.value});
  }

  onSubmit(){
    if(!this.searchForm.valid){
      return
    }
    console.log(this.searchForm.value.search);
    this.router.navigate(['offer'], {queryParams: {nombre: this.searchForm.value.search}});
    this.offersService.getOffers();
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  private initForm(){
    this.searchForm = new FormGroup({
      search: new FormControl(''/*, [Validators.required]*/)
    })
  }

  onClickOpenFilter() {
    console.log(this.productName);
    this.commonService.emitData({openFilter: true, productName: this.productName});
  }
}

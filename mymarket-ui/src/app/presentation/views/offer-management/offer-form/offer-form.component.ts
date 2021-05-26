import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { OfferService } from 'src/app/services/offer/offer.service';
import { debounceTime, tap, switchMap, finalize, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/auth/auth.service';
import { BusinessService } from 'src/app/services/business/business.service';
import { BusinessStore } from 'src/app/models/businessStore';

export interface Store {
  name: string;
  completed: boolean;
  color: ThemePalette;
  stores?: BusinessStore[];
}
@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
})
export class OfferFormComponent implements OnInit {
  storesInfo: Store = {
    name: 'Todas',
    completed: false,
    color: 'primary',
    stores: []
  };
  allComplete: boolean = false;
  isLinear = false;
  offerForm: FormGroup;
  discountForm: FormGroup;
  promotionForm: FormGroup;
  offerType:string;
  product;
  completed: boolean;
  offerIdToEdit;

  searchProductCtrl = new FormControl();
  filteredProducts: any;
  isLoading = false;
  errorMsg: string;

  constructor(
    private _formBuilder: FormBuilder,
    private offerService: OfferService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService,
    private businessService: BusinessService
  ) { }

  ngOnInit(): void {
    //agregar el completed usando .map
    // this.businessService.getStoresByUser().subscribe((res:{data: BusinessStore[]}) => {
    //   this.storesInfo.stores = res.data;
    //   console.log(res.data)
    // });

    this.businessService.getStoresByUser().pipe(
      map((data:any) => {
        // console.log(data.data)
        // let newArr = [];
        // data.forEach((el:any) => {
        //   el.completed = false;
        //   newArr.push(el)
        // })
        data.data.map((v:any) => ({...v, completed: false}))
        // console.log(newArr)
        return data;
      })
    ).subscribe(res => {
      this.storesInfo.stores = res.data;
    })

    this.route.params.subscribe(params => {
      if(params.offerId){
        this.offerIdToEdit = params.offerId;
      }
      //this.product =  getofferbyid
    });
    this.initForm();

    this.searchProductCtrl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.errorMsg = "";
          this.filteredProducts = [];
          this.isLoading = true;
        }),
        switchMap(value => this.http.get('http://localhost:4000/offer/product/?name=' + value)
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      )
      .subscribe((data:any) => {
        console.log(data.data)
        if (data.data[0] == undefined) {
          this.errorMsg = data['Error'];
          this.filteredProducts = [];
        } else {
          this.errorMsg = "";
          this.filteredProducts = data.data;
        }
        this.product = data.data[0];
      });

  }

  onSubmit(){
    console.log(this.authService.getUserId());
    let offer = this.offerForm.value;
    offer.offerType = 'discount';
    offer.price = offer.oldPrice * ( 1 - (offer.discount/100));
    offer.available = true;
    delete offer.discount;
    delete offer.productName;
    
    offer.branchIDs = [];
    offer.productID = this.product.id;
    offer.fromDate = '2021-02-10 15:00';
    offer.toDate = '2022-04-25 15:00';
    console.log(offer)
    this.storesInfo.stores.filter( el => el.selected).forEach(el => {
      offer.branchIDs.push(el.id);
    });
    this.offerService.postOffer(offer).subscribe(res => {
      console.log(res);
    });
  }

  onSearchProduct(){
    // console.log(this.offerForm.value);
    // this.offerService.getProduct(this.offerForm.value.productName).subscribe((res:any) => {
    //   this.product =res.data[0]
    // });
    this.offerService.getProductByName(this.offerForm.value.productName).then( res => {
      console.log(res)
    })
  }

  // applyFilter($event){
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  onChangeOfferType(){
    if(this.offerType == 'discount'){
      this.offerType = 'promotion';
    }else{
      this.offerType = 'discount';
    }
  }
  someComplete(): boolean {
    if (this.storesInfo.stores == null) {
      return false;
    }
    return this.storesInfo.stores.filter(t => t.selected).length > 0 && !this.allComplete;
  }

  updateAllComplete() {
    this.allComplete = this.storesInfo.stores != null && this.storesInfo.stores.every(t => t.selected);
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.storesInfo.stores == null) {
      return;
    }
    this.storesInfo.stores.forEach(t => t.selected = completed);
  }

  
  private initForm(){
    this.offerForm = this._formBuilder.group({
      productName: ['', Validators.required],
      price: ['', Validators.required],
      discount: ['', Validators.required],
      oldPrice: ['', Validators.required],
      offerType: ['', Validators.required],
    });
  }
}

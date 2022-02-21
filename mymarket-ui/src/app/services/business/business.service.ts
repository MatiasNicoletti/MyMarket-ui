import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { HttpService } from 'src/app/core/http/http.service';
import { BusinessStore } from 'src/app/models/businessStore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  private storesList:Subject<BusinessStore[]> = new Subject<BusinessStore[]>();
  stores: BusinessStore[] = [];
  constructor(
    private http: HttpService,
    private authService: AuthService
  ) {  }

  getStoresByUser(){
    return this.http.getBranchesByUserId(this.authService.getUserId())
  }

  getStoreListSubscription(){
    return this.storesList.asObservable();
  }

  uploadBusiness(stores: BusinessStore[]){
    stores.forEach(el => {
      delete el.id;
    });
    this.http.postBusiness(stores).subscribe(res => {
      return res
    });
    
  }

  getBranchById(id){
    return this.http.getBranchById(id);
  }

  addStore(store: BusinessStore){
    store.id = this.stores.length > 0 ? (this.stores[this.stores.length - 1].id + 1) : 1;
    this.stores.push(store);
    this.storesList.next(this.stores);
  }

  deleteStore(id:number){
    this.stores = this.stores.filter(store => store.id !== id);
    this.storesList.next(this.stores);
  }
}

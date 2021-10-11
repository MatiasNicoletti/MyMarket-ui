import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Offer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer/offer.service';
import { DateFormater } from 'src/app/utils/dateFormater';

const ELEMENT_DATA = [
  { product: 1, type: 'Hydrogen', price: 100, description: 1.0079 },
  { product: 2, type: 'Helium', price: 100, description: 4.0026 },
  { product: 3, type: 'Lithium', price: 100, description: 6.941 },
  { product: 4, type: 'Beryllium', price: 100, description: 9.0122 },
  { product: 5, type: 'Boron', price: 100, description: 10.811 },
  { product: 6, type: 'Carbon', price: 100, description: 12.0107 },
  { product: 7, type: 'Nitrogen', price: 100, description: 14.0067 },
  { product: 8, type: 'Oxygen', price: 100, description: 15.9994 },
  { product: 9, type: 'Fluorine', price: 100, description: 18.9984 },
  { product: 10, type: 'Neon', price: 100, description: 20.1797 },
];

@Component({
  selector: 'app-my-offer-list',
  templateUrl: './my-offer-list.component.html',
})
export class MyOfferListComponent implements OnInit {
  displayedColumns: string[] = ['nameProduct', 'fromDate', 'toDate', 'translatedType', 'oldPrice', 'discountAmmount', 'action'];
  dataSource;
  offers: Offer[];
  dateFormater = new DateFormater();

  constructor(
    private offerService: OfferService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.offerService.getOffers().subscribe((res:{data:Offer[]}) => {

    //   this.offers = res.data;
    //   console.log(this.offers);
    //   this.dataSource = new MatTableDataSource(this.offers); 
    // })
    this.offerService.getOffersByUserId(this.authService.getUserId()).pipe(map(
      (res: any) => {
        console.log(res)
        let newArr = [];
        res.data.forEach(element => {
          element.discountAmmount = (100 - (element.price * 100 / element.oldPrice)).toFixed(0)
          if (element.offerType == 'discount') {
            element.translatedType = 'Descuento';
          }
          newArr.push(element);
        });
        return newArr
      }
    )).subscribe((res: any) => {
      this.offers = res;
      console.log(this.offers)
      this.dataSource = new MatTableDataSource(this.offers);
    })
  }

  onDelete(id) {
    this.offerService.deleteOne(id).subscribe(res => {
      console.log(res);
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/mis-ofertas']);

    })
  }

  onRouteToEditOffer() {

  }

  applyFilter($event) {

  }
}
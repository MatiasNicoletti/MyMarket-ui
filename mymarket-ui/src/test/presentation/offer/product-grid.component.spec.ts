import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BusinessNewComponent } from 'src/app/presentation/views/business-management/business-new/business-new.component';
import { ProductGridComponent } from 'src/app/presentation/views/product-grid/product-grid.component';
import { BusinessService } from 'src/app/services/business/business.service';
import { OfferService } from 'src/app/services/offer/offer.service';

const products = [{
    productName: 'product test',
    productID: 1
},
{
    productName: 'product test 2',
    productID: 2
}
]

class OfferServiceMock {
    getOffers(productName: string) {
        return of(products)
    }
}

const offerServiceMock = new OfferServiceMock();
 
describe('ProductGridComponent', () => {
    let component: ProductGridComponent;
    let fixture: ComponentFixture<ProductGridComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            declarations: [ProductGridComponent],
            providers: [{ provide: OfferService, useClass: OfferServiceMock }]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get offers', () => {
        component.ngOnInit();
        expect(offerServiceMock.getOffers('product name')).toHaveBeenCalled();
        expect(component.offers.length).toEqual(products.length);
    })
});

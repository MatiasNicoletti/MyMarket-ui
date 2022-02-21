import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { BusinessService } from 'src/app/services/business/business.service';
import { OfferFormComponent } from '../../../app/presentation/views/offer-management/offer-form/offer-form.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { OfferService } from 'src/app/services/offer/offer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const mockOfferResponse = {
    data: {
        price: 100,
        oldPrice: 125,
        branchIDs: [1, 2]
    }
}

const mockUserStores = [
    {
        id: 1,
        name: "Carrefour",
        userId: 40,
        address: "123 Fake Street",
        city: "Mar del Plata",
        latitude: "-37.994474225",
        longitude: "-57.568484938"
    },
    {
        id: 2,
        name: "Toledo",
        userId: 40,
        address: "123 Fake Street",
        city: "Mar del Plata",
        latitude: "-37.994474225",
        longitude: "-57.568484938"
    }
]

class OfferServiceMock {
    getOfferById(id) {
        return of(mockOfferResponse);
    }

    updateOne(offer: any) {
        return of({ msg: 'success' });
    }

    postOffer(offer){
        return of({ msg: 'success' });
    }
}


class BusinessServiceMock {
    getStoresByUser() {
        return of({ data: mockUserStores });
    }
}

fdescribe('OfferFormComponent', () => {
    let component: OfferFormComponent;
    let fixture: ComponentFixture<OfferFormComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            declarations: [OfferFormComponent],
            providers: [
                FormBuilder,
                { provide: HttpClient, useClass: HttpClientTestingModule },
                { provide: BusinessService, useClass: BusinessServiceMock },
                { provide: ActivatedRoute, useValue: { params: of({ offerId: 123 }) } },
                { provide: OfferService, useClass: OfferServiceMock }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(OfferFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should submit valid form', () => {
        const offerMockService = new OfferServiceMock();
        const offerServiceSpy = spyOn(offerMockService, 'updateOne').and.callThrough();
        const formBuilder = new FormBuilder();
        component.product.id = 1;

        component.offerForm = formBuilder.group({
            productName: ['Harina', Validators.required],
            price: ['100', Validators.required],
            discount: ['25', Validators.required],
            oldPrice: ['100', Validators.required],
            offerType: ['discount', Validators.required],
            fromDate: [new Date(), Validators.required],
            toDate: [new Date(), Validators.required]
        });
        component.onSubmit()
        expect(offerServiceSpy).toHaveBeenCalled();
    })

    it('should submit valid form to post offer', () => {
        const offerMockService = new OfferServiceMock();
        const offerServiceSpy = spyOn(offerMockService, 'updateOne').and.callThrough();
        const formBuilder = new FormBuilder();
        component.product.id = 1;

        component.offerForm = formBuilder.group({
            productName: ['Harina', Validators.required],
            price: ['100', Validators.required],
            discount: ['25', Validators.required],
            oldPrice: ['100', Validators.required],
            offerType: ['discount', Validators.required],
            fromDate: [new Date(), Validators.required],
            toDate: [new Date(), Validators.required]
        });
        component.onSubmit()
        expect(offerServiceSpy).toHaveBeenCalled();
    })

    it('should submit valid form to update offer', () => {
        const offerMockService = new OfferServiceMock();
        const offerServiceSpy = spyOn(offerMockService, 'postOffer').and.callThrough();
        const formBuilder = new FormBuilder();
        component.product.id = 1;

        component.offerForm = formBuilder.group({
            productName: ['Harina', Validators.required],
            price: ['100', Validators.required],
            discount: ['25', Validators.required],
            oldPrice: ['100', Validators.required],
            offerType: ['discount', Validators.required],
            fromDate: [new Date(), Validators.required],
            toDate: [new Date(), Validators.required]
        });
        component.onSubmit()
        expect(offerServiceSpy).toHaveBeenCalled();
    })

    it('should show error message when submiting invalid form', () => {
        const offerMockService = new OfferServiceMock();
        const offerServiceSpy = spyOn(offerMockService, 'postOffer').and.callThrough();
        const formBuilder = new FormBuilder();
        component.product.id = 1;

        component.offerForm = formBuilder.group({
            productName: ['', Validators.required],
            price: ['', Validators.required],
            discount: ['25', Validators.required],
            oldPrice: ['100', Validators.required],
            offerType: ['discount', Validators.required],
            fromDate: ['', Validators.required],
            toDate: [new Date(), Validators.required]
        });
        component.onSubmit()
        expect(offerServiceSpy).not.toHaveBeenCalled();
    })
});

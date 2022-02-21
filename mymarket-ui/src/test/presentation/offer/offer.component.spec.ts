import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BusinessService } from 'src/app/services/business/business.service';
import { OfferService } from 'src/app/services/offer/offer.service';
import { OfferComponent } from '../../../app/presentation/views/offer/offer.component';

const mockOfferResponse = {
	data: {
		price: 100,
		oldPrice: 125,
		branchIDs: [1,2]
	}
}

class OfferServiceMock{
	getOfferById(id){
		return of(mockOfferResponse);
	}
}

class BusinessServiceMock{
	getBranchById(id){
		return of({id: 1, name: 'tienda test'});
	}
}

describe('OfferComponent', () => {
  let component: OfferComponent;
  let fixture: ComponentFixture<OfferComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ OfferComponent ],
				providers: [{provide: OfferService, useClass: OfferServiceMock}, {provide: ActivatedRoute,useValue: {params: of({offerId: 123})
				}}, { provide: BusinessService, useClass: BusinessServiceMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

	it('should set offer object', () => {
		expect(component.offer).toBeTruthy();
		expect(component.offer.price).toEqual(mockOfferResponse.data.price);
		expect(component.offer.oldPrice).toEqual(mockOfferResponse.data.oldPrice);
		expect(component.offer.branchIDs.length).toEqual(mockOfferResponse.data.branchIDs.length);
	})
});

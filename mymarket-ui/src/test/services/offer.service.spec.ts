import { OfferService } from "../../app/services/offer/offer.service";
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

describe('OfferService', () => {
  let service: OfferService;
  const offerId = 122;
  const newOffer = {
    "productId": 12,
    "price": 100,
    "oldPrice": 75,
    "offerType": "discount",
    "available": true
  }
  const invalidOffer = {
    "price": 100,
    "oldPrice": 75,
    "offerType": "discount",
    "available": true
  }

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule], providers: [OfferService] });
    service = TestBed.inject(OfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return offer by id', async () => {

    const response: any = await service.getOfferById(offerId).toPromise();
    expect(response).toBeTruthy();
    expect(response.data.id).toEqual(offerId);
    expect(response.data.productId).toBeTruthy();
  });

  it('should create an offer with no branches', async () => {
    const response: any = await service.postOffer(newOffer).toPromise();
    expect(response).toBeTruthy();
    expect(response.data.productId).toEqual(12);
    expect(response.data.branches).toEqual(null);
  });

  it('should return 400 when creating offer with no productId', async () => {
    
    try {
      await service.postOffer(invalidOffer).toPromise();
      
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.status).toEqual(400);
      expect(error.statusText).toContain('Bad Request');
      
    }
  });
});
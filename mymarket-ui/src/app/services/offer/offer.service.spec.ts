import { OfferService } from "./offer.service";
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

describe('OfferService', () => {
    let service: OfferService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({ imports: [HttpClientModule], providers: [OfferService] });
      service = TestBed.inject(OfferService);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  
    it('should return offers', async () => {
      const response = await service.getOffers().toPromise();
      console.log(response);
      expect(response);
    })
  });
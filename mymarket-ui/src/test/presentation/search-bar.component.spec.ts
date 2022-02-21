import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FilterComponent } from 'src/app/presentation/ui/filter/filter.component';
import { SearchBarComponent } from 'src/app/presentation/ui/search-bar/search-bar.component';
import { CommonService } from 'src/app/services/common/common.service';
import { OfferService } from 'src/app/services/offer/offer.service';

class CommonServiceMock{
    aClickedEvent(){
    }
}

class OfferServiceMock{
	getOffers(){}
	
}

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let router: Router;
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
				providers: [{provide: OfferService, useClass: OfferServiceMock},{provide: CommonService, useClass: CommonServiceMock}, {provide: Router}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to route offer', () => {
    component.onSubmit();
    expect(router.navigate(['offer'])).toHaveBeenCalled()
  });
});

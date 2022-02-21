import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FilterComponent } from 'src/app/presentation/ui/filter/filter.component';
import { CommonService } from 'src/app/services/common/common.service';

class CommonServiceMock{
    aClickedEvent(){
    }
}

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let router: Router;
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
				providers: [{provide: CommonService, useClass: CommonServiceMock}, {provide: Router}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to route offer', () => {
    component.ngOnInit();
    expect(router.navigate(['offer'])).toHaveBeenCalled();
  });
});

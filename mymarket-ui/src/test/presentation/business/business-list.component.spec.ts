import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BusinessListComponent } from 'src/app/presentation/views/business-list/business-list.component';
import { BusinessService } from 'src/app/services/business/business.service';

const stores = [{
    id: 1,
    name: 'tienda 1'
}, {
    id: 2,
    name: 'tienda 2'
}
]

class BusinessServiceMock {
    getStoreListSubscription() {
        return of([{

        }])
    }
}

describe('BusinessListComponent', () => {
    let component: BusinessListComponent;
    let fixture: ComponentFixture<BusinessListComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            declarations: [BusinessListComponent],
            providers: [{ provide: BusinessService, useClass: BusinessServiceMock }]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BusinessListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set offer object', () => {
        expect(component.stores).toBeTruthy();
        expect(component.stores.length).toEqual(2);
    })
});

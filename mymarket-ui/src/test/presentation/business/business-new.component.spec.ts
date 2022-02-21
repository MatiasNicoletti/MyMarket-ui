import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessNewComponent } from 'src/app/presentation/views/business-management/business-new/business-new.component';
import { BusinessService } from 'src/app/services/business/business.service';


class BusinessServiceMock {
    addStore(store) { }
}

describe('BusinessNewComponent', () => {
    let component: BusinessNewComponent;
    let fixture: ComponentFixture<BusinessNewComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            declarations: [BusinessNewComponent],
            providers: [{ provide: BusinessService, useClass: BusinessServiceMock }]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BusinessNewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should add store', () => {
        expect(component.OnAddStore()).toBeTruthy();

    })
});

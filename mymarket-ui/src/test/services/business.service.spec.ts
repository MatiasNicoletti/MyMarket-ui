import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BusinessService } from "src/app/services/business/business.service";
import { AuthService } from 'src/app/core/auth/auth.service';
import { BusinessStore } from 'src/app/models/businessStore';

describe('OfferService', () => {
    let service: BusinessService;
    let authService: AuthService;
    const branches: BusinessStore[] = [
        {
            address: 'Test address',
            city: 'Mar del Plata'
        }
    ]
    const branch:BusinessStore = {
        id: 1,
        address: 'Test address',
        city: 'Mar del Plata'
    };

    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [HttpClientModule], providers: [BusinessService] });
        service = TestBed.inject(BusinessService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return branches by user', async () => {
        authService.loginDev('test@gmail.com');
        const response: any = await service.getStoresByUser()
        expect(response).toBeTruthy();
        expect(response.data).toBeTruthy();
    });

    it('should post branch', async () => {
        const response: any = await service.uploadBusiness(branches);
        expect(response).toBeTruthy();
        expect(response.data.address).toEqual(branches[0].address);

    });

    it('should return branch by id', async () => {
        const response: any = service.getBranchById(branch.id);
        expect(response).toBeTruthy();
        response.subscribe(res => { 
            expect(response).toBeTruthy();
            expect(response.data.id).toEqual(branch.id);
        });
    });

    it('should add branch ', async () => {
        expect(service.stores[0].id).toEqual(branch.id);
    });

});
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessListManagementComponent } from './presentation/views/business-management/business-list-management/business-list-management.component';
import { BusinessNewComponent } from './presentation/views/business-management/business-new/business-new.component';
import { BussinessSigninComponent } from './presentation/views/bussiness-signin/bussiness-signin.component';
import { HomeComponent } from './presentation/views/home/home.component';
import { MyOfferListComponent } from './presentation/views/offer-management/my-offer-list/my-offer-list.component';
import { OfferFormComponent } from './presentation/views/offer-management/offer-form/offer-form.component';
import { OfferComponent } from './presentation/views/offer/offer.component';
import { ProductSelectionComponent } from './presentation/views/product-selection/product-selection.component';

const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/inicio', 
        pathMatch: 'full' 
    },
    {
        path: 'inicio',
        component: HomeComponent
    },
    {
        path: 'offer',
        component: ProductSelectionComponent
    },
    {
        path: 'oferta/:offerId',
        component: OfferComponent
    },
    {
        path: 'registrarme',
        component: BussinessSigninComponent
    },
    {
        path: 'nueva-oferta',
        component: OfferFormComponent
    },
    {
        path: 'nueva-oferta/:offerId',
        component: OfferFormComponent
    },
    {
        path: 'mi-empresa',
        component: BusinessListManagementComponent
    },
    {
        path: 'mi-empresa/sucursal',
        component: BusinessNewComponent
    },
    {
        path: 'mis-ofertas',
        component: MyOfferListComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            onSameUrlNavigation: 'reload'
        })
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
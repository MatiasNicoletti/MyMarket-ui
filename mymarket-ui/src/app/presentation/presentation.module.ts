import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { LogoComponent } from './ui/logo/logo.component';
import { HeaderComponent } from './ui/header/header.component';
import { SearchBarComponent } from './ui/search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { ProductSelectionComponent } from './views/product-selection/product-selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductGridComponent } from './views/product-grid/product-grid.component';
import { ProductGridItemComponent } from './views/product-grid-item/product-grid-item.component';
import { FilterComponent } from './ui/filter/filter.component';
import { OfferComponent } from './views/offer/offer.component';
import { AgmCoreModule } from '@agm/core';
import { SignUpComponent } from './views/signin/signup.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { HomeContentComponent } from './ui/home-content/home-content.component';
import { BussinessSigninComponent } from './views/bussiness-signin/bussiness-signin.component';
import { BusinessListComponent } from './views/business-list/business-list.component';
import { BusinessListItemComponent } from './views/business-list-item/business-list-item.component';
import { MyOfferListComponent } from './views/offer-management/my-offer-list/my-offer-list.component';
import { MyOfferListItemComponent } from './views/offer-management/my-offer-list-item/my-offer-list-item.component';
import { OfferFormComponent } from './views/offer-management/offer-form/offer-form.component';
import { BusinessListManagementComponent } from './views/business-management/business-list-management/business-list-management.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { BusinessNewComponent } from './views/business-management/business-new/business-new.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    LogoComponent,
    HeaderComponent,
    SearchBarComponent,
    ProductSelectionComponent,
    ProductGridComponent,
    ProductGridItemComponent,
    FilterComponent,
    OfferComponent,
    SignUpComponent,
    HomeContentComponent,
    BussinessSigninComponent,
    BusinessListComponent,
    BusinessListItemComponent,
    MyOfferListComponent,
    MyOfferListItemComponent,
    OfferFormComponent,
    BusinessListManagementComponent,
    BusinessNewComponent,
     
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatMenuModule,
    MatTableModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyAnXKtkJNFdPkrATcPnlLMS4VDiBUh_v-o', libraries: ['places', 'geometry', 'drawing']})
  ]
})
export class PresentationModule { }

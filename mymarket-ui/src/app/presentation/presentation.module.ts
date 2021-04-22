import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { LogoComponent } from './ui/logo/logo.component';
import { HeaderComponent } from './ui/header/header.component';
import { SearchBarComponent } from './ui/search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { ProductSelectionComponent } from './views/product-selection/product-selection.component';
import { ReactiveFormsModule } from '@angular/forms';
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
import { HomeContentComponent } from './ui/home-content/home-content.component';
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
    AgmCoreModule.forRoot({apiKey:'AIzaSyAuX3B8s_MZwVGLRm5cXrBxn5FNfqzSYKA'})
  ]
})
export class PresentationModule { }

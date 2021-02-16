import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { LogoComponent } from './ui/logo/logo.component';
import { HeaderComponent } from './ui/header/header.component';
import { SearchBarComponent } from './ui/search-bar/search-bar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    LogoComponent,
    HeaderComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PresentationModule { }

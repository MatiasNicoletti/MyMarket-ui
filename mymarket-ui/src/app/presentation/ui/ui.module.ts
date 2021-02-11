
import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterComponent } from './filter/filter.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    FilterComponent,
    NavbarComponent
  ],
  imports: [],
  providers: [],
  bootstrap: []
})
export class UiModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { PresentationModule } from './presentation/presentation.module';
import { RouterModule } from '@angular/router';
import { CommonService } from './services/common/common.service';
import { CoreModule } from './core/core.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PresentationModule,
    AppRoutingModule,
    CoreModule,
    ServicesModule
  ],
  exports: [RouterModule],
  providers: [CommonService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

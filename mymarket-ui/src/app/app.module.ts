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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    CommonModule,
    PresentationModule,
    AppRoutingModule,
    ServicesModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [CommonService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { AgmCoreModule } from '@agm/core';

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
    ServicesModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyAuX3B8s_MZwVGLRm5cXrBxn5FNfqzSYKA'})
  ],
  exports: [RouterModule],
  providers: [CommonService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

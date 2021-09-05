import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YstmEntranceComponent } from './ystm-entrance/ystm-entrance.component';
import { AprComponent } from './apr/apr.component';
import { EasterComponent } from './easter/easter.component';
import { Page404Component } from './page404/page404.component';
@NgModule({
  declarations: [
    AppComponent,
    YstmEntranceComponent,
    AprComponent,
    EasterComponent,
    Page404Component,
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

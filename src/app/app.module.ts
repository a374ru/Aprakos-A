import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YstmEntranceComponent } from './ystm-entrance/ystm-entrance.component';
import { AprComponent } from './apr/apr.component';
import { EasterComponent } from './easter/easter.component';
import { Page404Component } from './page404/page404.component';
import { StrapiComponent } from './strapi/strapi.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    YstmEntranceComponent,
    AprComponent,
    EasterComponent,
    Page404Component,
    StrapiComponent,
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YstmEntranceComponent } from './ystm-entrance/ystm-entrance.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCard } from '@angular/material/mat-card';
@NgModule({
  declarations: [
    AppComponent,
    YstmEntranceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatGridListModule,
    MatCard
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

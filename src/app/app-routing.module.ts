import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YstmEntranceComponent } from './ystm-entrance/ystm-entrance.component';
import { AprComponent } from './apr/apr.component';
import { EasterComponent } from './easter/easter.component';
import { Page404Component } from './page404/page404.component';
import { StrapiComponent } from './strapi/strapi.component';

const routes: Routes = [
  { path: '', redirectTo: 'apr', pathMatch: 'full' },
  { path: 'apr', component: AprComponent },
  { path: 'easter', component: EasterComponent },
  { path: 'strapi', component: StrapiComponent },
  { path: 'ystm', component: YstmEntranceComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

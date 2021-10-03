import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YstmEntranceComponent } from './ystm-entrance/ystm-entrance.component';
import { AprComponent } from './apr/apr.component';
import { EasterComponent } from './easter/easter.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: 'apr', component: AprComponent },
  { path: 'easter', component: EasterComponent },
  { path: 'ystm', component: YstmEntranceComponent },
  { path: '', redirectTo: 'apr', pathMatch: 'full' },
  { path: '*', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

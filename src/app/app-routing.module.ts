import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YstmEntranceComponent } from './ystm-entrance/ystm-entrance.component'

const routes: Routes = [
  { path: 'ystm', component: YstmEntranceComponent },
  { path: '', redirectTo: 'ystm', pathMatch: 'full' },
  // { path: '', component: YstmEntranceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

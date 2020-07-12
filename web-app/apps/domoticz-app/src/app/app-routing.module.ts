import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TempDetailsComponent } from './pages/temp-details/temp-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'temp-details/:idx', component: TempDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

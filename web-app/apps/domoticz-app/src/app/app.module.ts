import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from 'libs/shared/material.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { TempCardComponent } from './components/temp-card/temp-card.component';
import { HttpClientModule } from '@angular/common/http';
import { OverlaySpinnerComponent } from './components/overlay-spinner/overlay-spinner.component';
import { TempDetailsComponent } from './pages/temp-details/temp-details.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, HeaderComponent, TempCardComponent, OverlaySpinnerComponent, TempDetailsComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

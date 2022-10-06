import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import {ClarityModule} from "@clr/angular";
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import {FormsModule} from "@angular/forms";
import { CarCardComponent } from './components/car-card/car-card.component';
import { CarCardListComponent } from './components/car-card-list/car-card-list.component';
import {PaginatorModule} from "primeng/paginator";
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./app.routes";
import { CarSearchComponent } from './components/car-search/car-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CarFilterComponent,
    CarCardComponent,
    CarCardListComponent,
    CarDetailComponent,
    CarSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutes,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

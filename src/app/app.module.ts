import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import{MatInputModule} from'@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { VendorComponent } from './vendor/vendor.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { RestaurantDashboardComponent } from './restaurant-dashboard/restaurant-dashboard.component';
import { RestaurantCardsComponent } from './restaurant-cards/restaurant-cards.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddCuisineComponent } from './add-cuisine/add-cuisine.component';
import { CuisineCardsComponent } from './cuisine-cards/cuisine-cards.component';
import { CuisineDashboardComponent } from './cuisine-dashboard/cuisine-dashboard.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    VendorComponent,
    AddRestaurantComponent,
    RestaurantDashboardComponent,
    RestaurantCardsComponent,
    NotFoundComponent,
    AddCuisineComponent,
    CuisineCardsComponent,
    CuisineDashboardComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatInputModule, HttpClientModule,
    ReactiveFormsModule,MatSidenavModule,MatListModule,MatMenuModule,MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

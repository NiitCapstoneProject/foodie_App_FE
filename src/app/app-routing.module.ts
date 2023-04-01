import { EditAddressFormComponent } from './edit-address-form/edit-address-form.component';
import { CuisineEditComponent } from './cuisine-edit/cuisine-edit.component';
import { VendorRestaurantDashboardComponent } from './vendor-restaurant-dashboard/vendor-restaurant-dashboard.component';
import { VendorRestaurantCardComponent } from './vendor-restaurant-card/vendor-restaurant-card.component';
import { AddressComponent } from './address/address.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { CuisineCardsComponent } from './cuisine-cards/cuisine-cards.component';
import { CuisineDashboardComponent } from './cuisine-dashboard/cuisine-dashboard.component';
import { AddCuisineComponent } from './add-cuisine/add-cuisine.component';
import { RestaurantDashboardComponent } from './restaurant-dashboard/restaurant-dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VendorComponent } from './vendor/vendor.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { InfoResturantComponent } from './info-resturant/info-resturant.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { AddressEditComponent } from './address-edit/address-edit.component';


const routes: Routes = [
 {
  path: "login",
  component: LoginComponent,

},{
  path: "header",
  component: HeaderComponent,
},
{
  path: "register",
  component: RegistrationComponent,

}
,
{
  path: "addRestaurant",
  component: AddRestaurantComponent,

}
,
{
  path: "vendor",
  component: VendorComponent,

}
,
{
  path: "notFound",
  component: NotFoundComponent,

}
,
{
  path: "dashboard",
  component: RestaurantDashboardComponent,

},
{
  path: ":id/addCuisine",
  component: AddCuisineComponent,

},
{
  path: "cuisineDashboard/:id",
  component: CuisineDashboardComponent,

},
{
  path: "cuisineEdit",
  component: CuisineEditComponent,
},
{
  path: "cuisineCard",
  component: CuisineCardsComponent,

},


{
  path: "cart",
  component: CartComponent,

}
,
{
  path: "order",
  component: OrderComponent,

},
{
  path:"vendorRestaurantDashboard",
  component: VendorRestaurantDashboardComponent,
},
{
  path: "address",
  component: AddressComponent,

},
{
  path: "editAddressForm",
  component: EditAddressFormComponent,

},
{
  path: "info",
  component: InfoResturantComponent,

},
{
  path: "vendorResturantEdit",
  component: VendorRestaurantCardComponent,

},
{
  path: "vendorResturantdash",
  component: VendorRestaurantDashboardComponent,

},
{
  path: "resturantForm",
  component: RestaurantEditComponent,

}
,
{
  path: "addressdash",
  component: AddressEditComponent ,

},
{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

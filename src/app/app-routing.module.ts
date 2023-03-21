import { RestaurantDashboardComponent } from './restaurant-dashboard/restaurant-dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VendorComponent } from './vendor/vendor.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

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

}
// {
//   path: '',
//   redirectTo: '/song',
//   pathMatch: 'full'
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

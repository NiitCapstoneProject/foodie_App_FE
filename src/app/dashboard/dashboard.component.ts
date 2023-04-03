import { Router } from '@angular/router';
import { CityService } from './../services/city.service';
import { UserService } from './../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private city:CityService,private route:Router){}
  currCity:any
  cities:string[] = []
  ngOnInit(){

 this.city.getCity().subscribe(
   res=> {
     this.cities = res
   })
  }
  searchCity(){
    console.log(typeof this.currCity != "undefined")
    if(typeof this.currCity != "undefined"){
    this.route.navigateByUrl("/"+this.currCity+"/restaurantDashboard")}
    else{
      this.route.navigateByUrl("/"+this.cities[0]+"/restaurantDashboard")
      // window.alert("")
    }
  }
  onMenuChange(event:any){
    this.currCity = event.target.value
  }
}

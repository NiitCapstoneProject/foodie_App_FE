import { UserService } from './../services/user.service';
import { CityService } from './../services/city.service';
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent {
  constructor(private fb:FormBuilder,private city1:CityService,private Userservice:UserService){}
  form:FormGroup|any = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    city: ['', Validators.required],
    image: ['', ],
  });
  submitForm(){
    console.log(this.form.value)
    this.Userservice.updateRestaurantByVendor(this.form.value).subscribe(res=>{console.log("formUpdated");
    })
  }
  onFileSelected(event:any){
  }
  editProfile(img:HTMLInputElement){}


  cities:String[]=[];
  ngOnInit(): void {
    this.city1.getCity().subscribe(
      res=> {
        this.cities = res
      }
    )
  }
}

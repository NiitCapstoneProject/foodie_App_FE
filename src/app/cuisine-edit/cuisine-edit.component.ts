import { Cuisine } from './../models/cuisine';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from './../services/restaurant.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cuisine-edit',
  templateUrl: './cuisine-edit.component.html',
  styleUrls: ['./cuisine-edit.component.css']
})
export class CuisineEditComponent {

  constructor(private fb:FormBuilder,private restaurantService:RestaurantService,private activate:ActivatedRoute){}
  cuisineForm: FormGroup | any= this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    type: ['', Validators.required],
    // tags: ['',[]],
    // image: [""]
  });
  id:any
  cuisine:Cuisine ={
    price: 0,
    quantity: 0
  }
  ngOnInit(){
    this.activate.paramMap.subscribe(
      data => {
        console.log(JSON.stringify(data)+"param is reqiired")
         this.id = data.get('id') ?? 0;
         const cuisineId = data.get("cuisineId") ?? "";
          this.restaurantService.getCuisineById(this.id,cuisineId).subscribe(
            (res:any)=>{
              this.cuisine = res
            }
          )
        })
  }
  onSubmit(){
    // this.activate.paramMap.subscribe(
    //   data => {
    //     console.log(data+"param is reqiired")
    //     // let id:any = data.get('id') ?? 0;
    //     )
    //   }
    // )
    this.restaurantService.updateCuisineByVendor(this.cuisineForm.value,this.id).subscribe(res=>{console.log("updateSuccess");
        },err=>{console.log("notUpdated")})

  }
  onFileSelected(event:any){
  }
  updateImage(event:any){
    this.restaurantService.updateImage( this.cuisine.image,event.target.files[0]).subscribe(res=>{console.log("succesImage");
    // this.user.image = this.user.image
    })
  }
}

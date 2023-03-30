import { UserService } from './../services/user.service';
import { UrlTree } from '@angular/router';
import { Cuisine } from './../models/cuisine';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-cuisine',
  templateUrl: './add-cuisine.component.html',
  styleUrls: ['./add-cuisine.component.css']
})
export class AddCuisineComponent {
  image1:any;

  constructor(private formBuilder: FormBuilder,private userService:UserService) { }


    cuisineForm: FormGroup | any= this.formBuilder.group({
      name: ['', Validators.required],
      rating: [0, Validators.required],
      price: [0, Validators.required],
      type: ['', Validators.required],
      // tags: ['',[]],
      image: [null]
    });


  onSubmit() {
    console.log(this.cuisineForm.value);
    let cuisine:Cuisine={
      price: 0,
      quantity: 0
    };
    cuisine.name=this.cuisineForm.value.name;
    cuisine.rating=this.cuisineForm.value.rating;
    cuisine.price=this.cuisineForm.value.price;
    cuisine.type=this.cuisineForm.value.type;
    // cuisine.tags=this.cuisineForm.value.tag;
    this.userService.addCuisine(this.convert(cuisine))

  }
  onFileSelected(event:any){
    this.image1 = event.target.files[0];
  }


  convert(cuisine:Cuisine):FormData{
    const formdata = new FormData();
    formdata.append('cuisine',
    new Blob([JSON.stringify(cuisine)],{type:'application/json'})
    );
    formdata.append('image', this.image1

        // ,this.image1.name
        );

  return formdata;
  }

}

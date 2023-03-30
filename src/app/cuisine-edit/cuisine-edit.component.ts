import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cuisine-edit',
  templateUrl: './cuisine-edit.component.html',
  styleUrls: ['./cuisine-edit.component.css']
})
export class CuisineEditComponent {

  constructor(private fb:FormBuilder){}
  form:FormGroup|any = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    city: ['', Validators.required],
    image: ['', Validators.required],
  });
  submitForm(){
    console.log(this.form.value)
  }
  onFileSelected(event:any){
  }
}

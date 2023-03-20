import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {
  // form: FormGroup;

  constructor(private fb: FormBuilder) {}

  form:FormGroup|any = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    city: ['', Validators.required],
    image: ['', Validators.required],
  });

  onFileSelected(event:any){}

  submitForm() {
    if (this.form.invalid) {
      // this.snackBar.open('Please fill in all required fields', 'Dismiss', { duration: 3000 });
      return;
    }

    // Submit form data here
  }
}

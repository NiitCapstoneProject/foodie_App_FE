import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  registerForm: FormGroup|any;

  constructor(private fb:FormBuilder){}
  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      name: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      image:[''],
    }

    );
  }

  submitForm(){}

  onSubmit() {

    console.log(this.registerForm.value)
  }
  onFileSelected(event:any){
  }
}

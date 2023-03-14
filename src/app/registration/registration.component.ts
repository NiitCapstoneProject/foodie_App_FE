import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerForm: FormGroup | any;
  constructor(private fb: FormBuilder,private route:Router) { }
  expression:boolean = false

  exp() {
    this.expression = !this.expression
    console.log(this.expression)
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$')]],
      confirmPassword: ['', [Validators.required]],
      phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      name: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      image:['',[Validators.required]],
    }, {
      validator: this.passwordMatchValidator
    });
  }

  onSubmit() {
  //  console.log(this.registerForm.value.image)
  //   let user:User = {}
  //   user.email = this.registerForm.value.email
  //   user.password = this.registerForm.value.password
  //   user.name = this.registerForm.value.name
  //   user.dob = this.registerForm.value.dob
  //   user.phoneNo = this.registerForm.value.phoneNo
  //   this.userService.register(user)
  //   this.route.navigateByUrl('/login')
  }
  passwordMatchValidator: ValidatorFn = (control: AbstractControl): {[key: string]: any} | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password && confirmPassword && password.value !== confirmPassword.value ? { passwordMismatch: true } : null;
  }
}

import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  registerForm: FormGroup|any;
user:User = {}
  constructor(private fb:FormBuilder,private userService:UserService){}
  ngOnInit() {
    let user:User ={}
    const email:any = localStorage.getItem('email')
    user.email = String(email)
    const name:any = localStorage.getItem("name")
    user.name = String(name)
    const image:any = localStorage.getItem("image")
    user.image = Number(image)
    this.user = user

    let user1:User
    this.userService.getUser().subscribe(
      (res:User)=>{
        user1 = res
        this.registerForm  = this.fb.group({
          email: [user1.email, [Validators.required, Validators.email]],
          phoneNo: [user1.phoneNo, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
          name: [user1.name, [Validators.required]],
          dob: ["", [Validators.required]],
          image:[''],
        })
      }
    )


  }

  disable:boolean = true
  submitForm(){
    this.userService.updateUser(this.registerForm.value).subscribe(res=>{console.log("userUpdated");
    })
  }

  onSubmit() {

    console.log(this.registerForm.value)
  }
  onFileSelected(event:any){
  }



  updateImage(event:any){
    this.userService.updateImage( this.user.image,event.target.files[0]).subscribe(res=>{console.log("succesImage");
    let img:any = document.getElementById("profile-img")
    // img.setAttribute("src",event.target.files[0])
    // img.src = event.target.files[0]
    // console.log(event.target.files[0])
    // img.src = "http://localhost:9000/image/getimage/"+this.user.image
    // console.log(img.src)
    img.src = window.URL.createObjectURL(event.target.files[0])
    console.log(img.src)
    })
  }
}

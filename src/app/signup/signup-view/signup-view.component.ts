import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {SignupService} from '../../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-view',
  templateUrl: './signup-view.component.html',
  styleUrls: ['./signup-view.component.scss']
})
export class SignupViewComponent implements OnInit {

  hide=false;

  signupForm=new FormGroup({
    name:new FormControl('',Validators.required),
    username:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required),
    address:new FormGroup({
      houseNo:new FormControl('',Validators.required),
      street:new  FormControl('',Validators.required),
      district:new  FormControl('',Validators.required),
      state:new  FormControl('',Validators.required),
      pincode:new  FormControl('',Validators.required),

    })
  })

  constructor(private signupcontroller:SignupService,
    private router:Router) { }

  ngOnInit(): void {
  }

  signup() {
    this.signupcontroller.signup(this.signupForm.value).subscribe((res)=>{
      localStorage.setItem('currentUser' , res);
      this.signupcontroller.createuser(this.signupForm.value).subscribe((res)=>{
        this.router.navigate(['/profile'])
      })
    })
  }

}

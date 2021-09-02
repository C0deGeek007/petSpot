import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms'
import {SignupService} from '../../services/signup.service'

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

  constructor(private signupcontroller:SignupService) { }

  ngOnInit(): void {
  }

  signup() {
    this.signupcontroller.signup(this.signupForm.value).then(()=>{
      console.log("signedUp");
    }).catch((err)=>{
      console.log(err);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { SigninService } from '../../services/signin.service';
import { mockUserInfo } from '../../usersData/mock-userInfo'
import { ProfileService } from 'src/app/services/profile.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrls: ['./user-profile-view.component.scss']
})
export class UserProfileViewComponent implements OnInit {

  constructor(private signincontroller:SigninService,
      private profile:ProfileService
    ) { }

  disable:boolean=true
  userId:string='';
  userDetailForm:FormGroup=new FormGroup({
    name:new FormControl({value:'',disabled:true}),
    username:new FormControl({value:'',disabled:true}),
    email:new FormControl({value:'',disabled:true}),
    password:new FormControl({value:'',disabled:true}),
    address:new FormGroup({
      houseNo:new FormControl({value:'',disabled:true}),
      street:new  FormControl({value:'',disabled:true}),
      district:new  FormControl({value:'',disabled:true}),
      state:new  FormControl({value:'',disabled:true}),
      pincode:new  FormControl({value:'',disabled:true}),

    })
  })

  ngOnInit(): void {
    this.userId=localStorage.getItem('currentUser') as string;
    console.log(this.userId);
    this.profile.getUserProfile(this.userId).subscribe((res)=>{
      this.userDetailForm.setValue({
        name:res['name'],
        username:res['username'],
        email:res['email'],
        password:res['password'],
        address:{
          houseNo:res['address']['houseNo'],
          street:res['address']['street'],
          district:res['address']['district'],
          state:res['address']['state'],
          pincode:res['address']['pincode']
        }
      });
    },(err)=>{
      console.log("error");
    });
  }

  signout() {
    this.signincontroller.signOut();
  }

}

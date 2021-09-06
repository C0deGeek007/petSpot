import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user-view',
  templateUrl: './edit-user-view.component.html',
  styleUrls: ['./edit-user-view.component.scss']
})
export class EditUserViewComponent implements OnInit {

  disable:boolean=true
  userId:string='';
  hide=false;
  userDetailForm:FormGroup=new FormGroup({
    name:new FormControl({value:'',disabled:true}),
    username:new FormControl({value:''},Validators.required),
    email:new FormControl({value:'',disabled:true}),
    password:new FormControl({value:''},Validators.required),
    address:new FormGroup({
      houseNo:new FormControl({value:'',disabled:true}),
      street:new  FormControl({value:'',disabled:true}),
      district:new  FormControl({value:'',disabled:true}),
      state:new  FormControl({value:'',disabled:true}),
      pincode:new  FormControl({value:'',disabled:true}),

    })
  })

  constructor(private profile:ProfileService,
    private router:Router
    ) { }

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

  save() {
    console.log("edited data");
    console.log(this.userDetailForm);
    const userChanges=this.userDetailForm.value;
    userChanges['id']=this.userId;
    this.profile.editUserProfile(userChanges).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/profile']);
    },(err)=>{
      console.log("error");
    });
  }

}

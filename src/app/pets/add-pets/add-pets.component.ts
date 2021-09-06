import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PetsService } from '../../services/pets.service'

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.scss']
})
export class AddPetsComponent implements OnInit {

  userId:string='';

  constructor(private router:Router,
    private petservice:PetsService) { }

  addpetsform=new FormGroup({
    name:new FormControl('',Validators.required),
    species:new FormControl('',Validators.required),
    breed:new FormControl('',Validators.required),
    color:new FormControl('',Validators.required),
  });

  ngOnInit(): void {
    this.userId=localStorage.getItem('currentUser') as string;
    console.log("userid is");
    console.log((this.userId));
  }

  addpet() {
    // console.log("add pet function");
    // console.log(this.addpetsform.value);s
    const petdetail={...this.addpetsform.value};
    petdetail['userid']=this.userId
    this.petservice.addpets(petdetail).subscribe((res)=>{
      console.log("inside subscribe");
      console.log(res);
    },(err)=>{
      console.log("error");
    })
  }

}

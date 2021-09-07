import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { PetsService } from '../../services/pets.service'
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-pets',
  templateUrl: './edit-pets.component.html',
  styleUrls: ['./edit-pets.component.scss']
})
export class EditPetsComponent implements OnInit {

  userId:string='';
  petid:string='';

  editpetsform=new FormGroup({
    name:new FormControl('',Validators.required),
    species:new FormControl('',Validators.required),
    breed:new FormControl('',Validators.required),
    color:new FormControl('',Validators.required),
    id:new FormControl('')
  });

  constructor(private route:ActivatedRoute, 
    private router:Router,
    private petservice:PetsService) { }

  ngOnInit(): void {
    this.petid=this.route.snapshot.paramMap.get('details') as string ;
    this.userId=localStorage.getItem('currentUser') as string;
    this.petservice.getPetById(this.petid,this.userId).subscribe((res)=>{
      this.editpetsform.setValue({
        name:res['name'],
        species:res['species'],
        breed:res['breed'],
        color:res['color'],
        id:res['id']
      })
    },(err)=>{
      console.log("error");
    })
  }

  editpet(){
    const petanduserdetail={...this.editpetsform.value};
    petanduserdetail['userid']=this.userId;
    this.petservice.editpets(petanduserdetail).subscribe((res)=>{
      this.router.navigate(['/pets/petsview']);
    },(err)=>{
      console.log("error");
    })
  }

}

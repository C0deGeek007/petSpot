import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { PetsService } from '../../services/pets.service'


@Component({
  selector: 'app-edit-pets',
  templateUrl: './edit-pets.component.html',
  styleUrls: ['./edit-pets.component.scss']
})
export class EditPetsComponent implements OnInit {

  userId:string='';
  petid:string=''

  constructor(private route:ActivatedRoute, 
    private router:Router,
    private petservice:PetsService) { }

  ngOnInit(): void {
    this.petid=this.route.snapshot.paramMap.get('details') as string ;
    this.userId=localStorage.getItem('currentUser') as string;
    console.log("inside edit pets");
    console.log(this.petid);
    console.log("userid");
    console.log(this.userId); 
    
    /*this.petservice.editpets(this.petid,this.userId).subscribe((res)=>{

    },(err)=>{
      console.log("error");
    })*/
  }

}

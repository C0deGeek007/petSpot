import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetsService } from '../../services/pets.service'

@Component({
  selector: 'app-pets-view',
  templateUrl: './pets-view.component.html',
  styleUrls: ['./pets-view.component.scss']
})
export class PetsViewComponent implements OnInit {

  displayedColumns: string[] = ['name','species','breed','color'];
  userId:string='';
  dataSource:[]=[];
  nodata:boolean=true;

  constructor(private router:Router,
    private petservice:PetsService) { }

  ngOnInit(): void {
    this.userId=localStorage.getItem('currentUser') as string;
    this.petservice.getpets(this.userId).subscribe((res)=>{
      console.log("inside getpets subscribe");
      console.log(res);
      this.dataSource=res;
      if(res.length!=0) {
        this.nodata=false;
      }
    },(err)=>{
      console.log("error");
    }) 
  }

  addpet() {
    this.router.navigate(['/pets/addpets'])
  }

  info(row:any) {
    console.log(row);
  }

}

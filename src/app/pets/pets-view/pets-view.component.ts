import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets-view',
  templateUrl: './pets-view.component.html',
  styleUrls: ['./pets-view.component.scss']
})
export class PetsViewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addpet() {
    this.router.navigate(['/pets/addpets'])
  }

}

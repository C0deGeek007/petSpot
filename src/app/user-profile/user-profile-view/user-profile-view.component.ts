import { Component, OnInit } from '@angular/core';
import { SigninService } from '../../services/signin.service'
@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrls: ['./user-profile-view.component.scss']
})
export class UserProfileViewComponent implements OnInit {

  constructor(private signincontroller:SigninService) { }

  ngOnInit(): void {
  }

  signout() {
    this.signincontroller.signOut();
  }

}

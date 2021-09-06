import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { SigninService } from '../../services/signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  hide: boolean = false;

  loginForm=new FormGroup( {
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  });

  constructor(private signincontroller:SigninService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  onLogin():void {
    this.signincontroller.signIn(this.loginForm.value['email'],this.loginForm.value['password']).subscribe((res)=>{
      localStorage.setItem('currentUser',res);
      console.log("onlogin function");
      console.log(localStorage.getItem('currentUser'));
      this.router.navigate(['/profile']);
    },(err)=>{
      console.log("Error");
    })
  }

  getErrorMessage() {
    if (this.loginForm.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }

}

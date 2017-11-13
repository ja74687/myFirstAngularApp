import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core'
import {Router} from '@angular/router'
import {UserService} from '../user.service'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor( private router:Router,
    private user:UserService) { }

  ngOnInit() {
  }

  loginUser(f: NgForm){
    if(f.value.loginText == "admin" && f.value.passwordText == "admin")
    {
      this.user.setUserLogged();
      this.router.navigate(['dashboard']);
      //console.log("jhgjh");
    }
    
  }


}

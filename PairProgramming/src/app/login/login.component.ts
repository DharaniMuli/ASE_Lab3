import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public emailid;
  public password : string;


  constructor(private router: Router) { }

  ngOnInit() {
  }
  userLogin () {
    var user =  localStorage.getItem(this.emailid);
    if (user!= null){
      user= JSON.parse(user);
      if(this.password == user.password){
        this.router.navigate(['/', 'home']);
      }
    }
  }
}

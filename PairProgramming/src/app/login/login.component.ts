import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public emailid;
  public password: string;
  constructor(private router: Router) {
    this.setBodyStyles();
  }
  ngOnInit() {
  }
  setBodyStyles() {
    document.getElementById('bodyId').classList.add("other-style");
    document.getElementById('bodyId').classList.remove("home-style");
  }
  userLogin() {
    let user =  localStorage.getItem(this.emailid);
    if (user != null) {
      user = JSON.parse(user);
      // @ts-ignore
      if (this.password === user.password){
        this.router.navigate(['/', 'home']);
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public counter: number;
  public user;
  constructor() {
    this.resetuser();
    this.setBodyStyles();
  }
  resetuser() {
    this.user = {
      'firstname': '',
      'lastname': '',
      'username': '',
      'password': ''
    };
  }
  ngOnInit() {
  }
  setBodyStyles() {
    document.getElementById('bodyId').classList.add("other-style");
    document.getElementById('bodyId').classList.remove("home-style");
  }
  registerUser = () => {
    let userInfo = {
      "firstname": this.user.firstname,
      "lastname": this.user.lastname,
      "username": this.user.username,
      "password": this.user.password
    }
    // localStorage supported
    if (window.localStorage) {
      localStorage.setItem(userInfo.username, JSON.stringify(userInfo));
      this.resetuser();
    }

  }
}

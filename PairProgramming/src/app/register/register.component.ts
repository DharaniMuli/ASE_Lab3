import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

public firstname;
public lastname;
public username;
public password;

public counter: number;
  constructor() { }

  ngOnInit() {
  }

  storeLocally = () => {

    let user = {
      "firstname": this.firstname,
      "lastname": this.lastname,
      "username": this.username,
      "password": this.password
    }
    // localStorage supported
    if (window.localStorage) {

      localStorage.setItem(user.username, JSON.stringify(user));
    }

  }
}

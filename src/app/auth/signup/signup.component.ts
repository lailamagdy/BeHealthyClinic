import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { AuthService } from '../auth.service';
import * as firebase from 'firebase'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMsg: string = '';
  

  constructor() { }

  ngOnInit() {

  }


  onSignup() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
      this.errorMsg='You have signed up successfully'
    }).catch(e => {
      if (e.code == 'auth/email-already-in-use') {
        this.errorMsg = 'User already exists';
      }
    });
  }

}
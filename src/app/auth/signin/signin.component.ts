import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase'
import { SharingService } from 'src/app/Services/shareservice';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMsg = '';
  isAdmin: boolean;
  userId: string;
  constructor(private router: Router, private sharingservice: SharingService, private afDatabase: AngularFireDatabase) {

  }


  ngOnInit() {
  }
  onSignin() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
      Response => {
        this.userId = Response.user.uid;
        this.sharingservice.setData('uid',this.userId)
        this.afDatabase.database.ref(`admin/${this.userId}`).once('value').then(snap => {
          if (snap.val()) {
            this.isAdmin = true;
            sessionStorage.setItem('admin', 'true');
          }
          else {
            this.isAdmin = false;
          }

          if (this.isAdmin) {
            this.router.navigate(['/admin']);
  
          } else {
            this.router.navigate(['/user-page']);}
        });
       

        
      }).catch(e => {

        if (e.code == 'auth/wrong-password') {
          this.errorMsg = 'The password you entered is incorrect';

        }
        if (e.code == 'auth/user-not-found') {
          this.errorMsg = 'User does not exist! please signup first';

        }
      });

  }
  isAdminAuthenticated() {
    return sessionStorage.getItem('admin');
  }
}

import { Component, OnInit } from '@angular/core';
import { SharingService } from '../Services/shareservice';
import * as firebase from 'firebase'
import { Router } from '@angular/router';
import { SigninComponent } from '../auth/signin/signin.component';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public sharingservice: SharingService, private router: Router) { }

  ngOnInit() {
  
    
  
  }

  onLogout(){
    firebase.auth().signOut();
    sessionStorage.removeItem('admin');
    this.sharingservice.cleanAll();
    this.router.navigate['signin'];

  }
}
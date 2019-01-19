import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
@Injectable()

export class AuthService {
    token:string;
    errorMsg: string;

    constructor(private router:Router){

    }
    signupUser(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            
    }



    signinUser(email: string, password: string) {
       
    
   
     firebase.auth().signInWithEmailAndPassword(email, password).then(
         Response=> {
            firebase.auth().currentUser.getIdToken().then(
                (token:string)=> this.token=token
                    )
        //localStorage.setItem("user", this.email);
         this.router.navigate(['/user-page']);
     
         }).catch(e => {
     
           if (e.code == 'auth/wrong-password') {
             this.errorMsg = 'The password you entered is incorrect';
            //  console.log(this.errorMsg);
             
           }
           if (e.code == 'auth/user-not-found') {
             this.errorMsg = 'User does not exist! please signup first';   
     
           }
         });

}

getToken(){
  firebase.auth().currentUser.getIdToken().then(
 (token:string)=> this.token=token
     );
     return this.token;
 }
 isAuthenticated(){
     return this.token!= null;
 }
 logout(){
     firebase.auth().signOut();
     this.token=null;
     this.router.navigate(['/signin']);

 }

}
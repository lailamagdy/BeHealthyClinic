import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './data-storage.service';
// import { Response } from 'selenium-webdriver/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { SharingService } from '../Services/shareservice';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
today:string;  
  userForm={
    patientName:'',
    doctorName:'',
    timeDesired:'',
    date:''
  }
  msg: string = '';
  Acceptedmsg: string='';
  fArray=[];

// listUser:AngularFireList<any>;  

  constructor(private dataStorageService: DataStorageService, private afDatabase: AngularFireDatabase, public sharingservice: SharingService) {
    this.dataStorageService.getUserInfo();
    this.today=formatDate(new Date(),'yyyy-MM-dd','en');
   }

  ngOnInit() {
  }

  onSelectDoctor(event){
    this.userForm.doctorName= event.target.value;
        
      }

      onSelectTime(event){
        console.log(event.target.value)
        this.userForm.timeDesired= event.target.value;
        if (this.userForm.timeDesired=="1"){
          this.userForm.timeDesired="10am"
        }
        if (this.userForm.timeDesired=="2"){
          this.userForm.timeDesired="11am"
        }
        if (this.userForm.timeDesired=="3"){
          this.userForm.timeDesired="12pm"
        }
        if (this.userForm.timeDesired=="4"){
          this.userForm.timeDesired="1pm"
        }
        if (this.userForm.timeDesired=="5"){
          this.userForm.timeDesired="2pm"
        }
        
        // console.log(this.userForm.timeDesired);   
          }

onSubmitData(){
  console.log(this.userForm)
  this.fArray=[];
  this.userForm.doctorName;
  this.afDatabase.database.ref('userForm').once('value').then(actions=>{
    actions.forEach(action=>{
          if(action.child('doctorName').val()==this.userForm.doctorName&&action.child('timeDesired').val()==this.userForm.timeDesired&&action.child('date').val()==this.userForm.date ){   
         this.fArray.push(action.val())
         
        }
        })
        if(this.fArray.length==0){
        this.afDatabase.database.ref('userForm').push(this.userForm);
        this.msg='Your reservation has been sent to Doctor '+this.userForm.doctorName+'  with the reservation time '+ this.userForm.timeDesired;
        } else {
          this.msg='This Appointment is already taken! Please choose another Date ';  
        }
  })

 
  
}

}

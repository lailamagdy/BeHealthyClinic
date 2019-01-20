import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './data-storage.service';
// import { Response } from 'selenium-webdriver/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { SharingService } from '../Services/shareservice';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  // doctorsList :['ahmed','mohamed','ali'];
  userForm={
    patientName:'',
    doctorName:'',
    timeDesired:''
  }
  msg: string = '';
  Acceptedmsg: string='';
  fArray=[];

// listUser:AngularFireList<any>;  

  constructor(private dataStorageService: DataStorageService, private afDatabase: AngularFireDatabase, public sharingservice: SharingService) {
    this.dataStorageService.getUserInfo();
   }

  ngOnInit() {
  }

  onSelectDoctor(event){
    this.userForm.doctorName= event.target.value;
    if (this.userForm.doctorName=="1"){
      this.userForm.doctorName="Mohamed"
    }
    if (this.userForm.doctorName=="2"){
      this.userForm.doctorName="Ahmed"
    }
    if (this.userForm.doctorName=="3"){
      this.userForm.doctorName="Ali"
    }
    if (this.userForm.doctorName=="4"){
      this.userForm.doctorName="Ismail"
    }
    if (this.userForm.doctorName=="5"){
      this.userForm.doctorName="Mahmoud"
    }
     console.log(this.userForm.doctorName);    
      }

      onSelectTime(event){
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
        
        console.log(this.userForm.timeDesired);   
          }

onSubmitData(){
  this.fArray=[];
  this.userForm.doctorName;
  this.afDatabase.database.ref('userForm').once('value').then(actions=>{
    actions.forEach(action=>{
          // let form=action.payload.toJSON()
          // form['$key']=action.key;
          if(action.child('doctorName').val()==this.userForm.doctorName&&action.child('timeDesired').val()==this.userForm.timeDesired){   
         this.fArray.push(action.val())
         console.log(action.val().child('patientName').val());
         
        }
        })
        if(this.fArray.length==0){
    
          console.log(this.fArray.length+'if')
        this.afDatabase.database.ref('userForm').push(this.userForm);
        this.msg='Your reservation has been sent to Doctor '+this.userForm.doctorName+'  with the reservation time '+ this.userForm.timeDesired;
        } else {
          console.log(this.fArray.length+'else')
          this.msg='This Appointment is already taken! Please choose another Date ';  
        }
  })

 
  
}

}

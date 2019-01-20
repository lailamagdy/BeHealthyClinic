import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../user-page/data-storage.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { SharingService } from '../Services/shareservice';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  fArray=[];
  userForm={
    doctorName:'',
    timeDesired:''   
  }
  Acceptedmsg: string='';
msg='';


listUser:AngularFireList<any>;  

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
    //  console.log(this.userForm.doctorName);    
      }



      onSubmitData(){
        // let fArray=[];
        this.fArray=[];
        this.userForm.doctorName;
        this.listUser=this.afDatabase.list('userForm');
        this.listUser.snapshotChanges().subscribe(actions=>{
          actions.forEach(action=>{
            let form=action.payload.toJSON()
            form['$key']=action.key;
            if(action.payload.child('doctorName').val()==this.userForm.doctorName){ 
            this.fArray.push(form) 
          }
            // this.msg=action.payload.child('doctorName').val()+'-'+action.payload.child('timeDesired').val()

          })
          
           console.log(this.fArray);
          // this.msg= ''+fArray ;     
          //  fArray.forEach(element => {
            
          //   this.msg=''+ element.doctorName+'-'+element.timeDesired;
          //   console.log(this.msg)
            
          //  });   
      //  for(var i = 0;i<fArray.length;i++) { 
      // this.msg[i]=((fArray[i].doctorName)+'-'+ fArray[i].timeDesired);
      //     }
      //    console

        })
        // return fArray;
      }

     
    

}

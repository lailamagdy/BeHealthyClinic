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

          })
          
           console.log(this.fArray);
          

        })
      }

     
    

}

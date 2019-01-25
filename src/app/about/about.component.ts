import { Component, OnInit } from '@angular/core';
import{AngularFireStorage}from '@angular/fire/storage';
import{ UUID } from 'angular2-uuid';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  uuid=UUID.UUID();
url:string;
  constructor(private afStorage:AngularFireStorage) { }

  ngOnInit() {
  }
  uploadImage(event){
    const filePath=this.uuid.substring(2);
    const file=event.target.files[0];
    this.afStorage.upload(filePath,file).then(()=>{
      const ref=this.afStorage.ref(filePath);
      ref.getDownloadURL().subscribe(url=>{
  // const URL=url;
  this.url=url;
console.log(this.url)
      })
    })
  
  }
}



    



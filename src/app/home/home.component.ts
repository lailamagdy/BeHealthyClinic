import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from '../Services/shareservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,public sharingservice: SharingService) { }

  ngOnInit() {
  }

  onAddAppointment(){
    this.router.navigate(['/user-page']);

  }
  

}

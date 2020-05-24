import { Component, OnInit } from '@angular/core';
import {} from './LoginServiceService';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(private loginServiceService:LoginServiceService) { 
    
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {Route,ActivatedRoute,Params} from '@angular/router';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

valueD;
val;
  constructor(private activeRoute: ActivatedRoute) { 
    
    
  }

  ngOnInit(): void {
  this.activeRoute.params.subscribe((params)=> {
    const val=params['p1'];
    this.valueD=val;
    alert(val);
         
     
  });
  alert(this.valueD);
  this.val=Object.values(this.valueD);
  alert(this.val);
     
  }

}

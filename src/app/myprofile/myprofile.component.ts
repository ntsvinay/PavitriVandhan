import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { LoginServiceService } from 'src/app/login-service.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

valueD=false;
errorMsg='invalid user';
val;
  constructor(private activeRoute: ActivatedRoute,private loginservice: LoginServiceService
    ,private router: Router) { 
    
    
  }

  ngOnInit(): void {

    this.loginservice.msg.subscribe((data)=>{
      this.val=data;
      if(this.val.userName==undefined){
        // this.router.navigate(['/firstregisteration'])
       this.valueD=false;
      }
      else{
        
      
      this.valueD=true;
      
    }

    })
  
  }

  // this.activeRoute.params.subscribe((params)=> {
  //   const val=params['p1'];
  //   this.valueD=val;
  //   alert(val);
         
     
  // });
  // alert(this.valueD);
  // this.val=Object.values(this.valueD);
  // alert(this.val);
     
  // }

}

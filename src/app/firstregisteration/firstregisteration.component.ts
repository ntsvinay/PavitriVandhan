import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/login-service.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';

import { Observable, EMPTY, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ok } from 'assert';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-firstregisteration',
  templateUrl: './firstregisteration.component.html',
  styleUrls: ['./firstregisteration.component.css']
})
export class FirstregisterationComponent implements OnInit {

  //call caste api

  registerationDetails: FormGroup;
  castes;
  religionList;
  motherTongueList;
  profileOwnerList;
  registrationApiReturnData;

  
  casteApi = 'https://pavitrivandhanapi.herokuapp.com/caste/';
  religionApi = 'https://pavitrivandhanapi.herokuapp.com/allReligion';
  saveRegistrationDetails = 'https://pavitrivandhanapi.herokuapp.com/userDetails';
  userLoginApi = 'https://pavitrivandhanapi.herokuapp.com/userLoging';
  profileOwnerApi = 'https://pavitrivandhanapi.herokuapp.com/profileOwner';
  mothertongueApi = 'https://pavitrivandhanapi.herokuapp.com/motherTongue';
  //local database
  // saveRegistrationDetails = 'http://localhost:8080/userDetails';
  // userLoginApi = 'http://localhost:8080/userLoging';
  // casteApi = 'http://localhost:8080/caste/';
  // religionApi = 'http://localhost:8080/allReligion';
  // profileOwnerApi = 'http://localhost:8080/profileOwner';
  // mothertongueApi = 'http://localhost:8080/motherTongue';

  castelist(valueReligions) {
    this.casteApi = this.casteApi;
        this.http.get(this.casteApi + valueReligions).subscribe((data) => {
      console.warn(data)
      this.castes = data;
    })
  }


get reg(){return this.registerationDetails.controls}
  onRegistrationSubmitError=false;

  //submiting the login details
  onRegisterDetailsSubmit() {
    this.onRegistrationSubmitError=true;
    if (this.registerationDetails.invalid) {
      return;
    }
    let basicSetup = {
      userName: this.registerationDetails.value.userName,
      userEmail: this.registerationDetails.value.userEmail,
      userGender: this.registerationDetails.value.userGender,
      // userMotherTongue: this.registerationDetails.value.userMotherTongue,
      // userProfileOwner: this.registerationDetails.value.userProfileOwner,
      userCaste: {
        "id": this.registerationDetails.value.userCaste,
        caste_id: this.registerationDetails.value.userCaste,
        caste_religion_id: this.registerationDetails.value.religion_id

      }, "userReligion": {
        "id": this.registerationDetails.value.religion_id,
        religion_id: this.registerationDetails.value.religion_id

      },"userMotherTongue": {
        "motherTongueId":this.registerationDetails.value.userMotherTongue
      },"userProfileOwner":{"profileCreaterId":this.registerationDetails.value.userProfileOwner}
    }
    this.registerationDetails = this.formBuilder.group(basicSetup);
    
      console.warn(this.registerationDetails);
       this.http.post(this.saveRegistrationDetails, this.registerationDetails.value).subscribe
       (data=>(this.router.navigate(['/preferences'])),error=>(this.onRegistrationSubmitError=true));
         }

         //Login Pop start from here


  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,
     private router: Router,private loginservice: LoginServiceService,private authService:AuthService) {


  }
  show() {
    this.showModal = true; // Show-Hide Modal Check

  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }
  ngOnInit() {
    // debugger
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.registerationDetails = this.formBuilder.group({
      userName: ['', [Validators.required]],
      userEmail: ['', [Validators.required, Validators.email]],
      userGender: ['', [Validators.required]],
      userMotherTongue: ['-Select-', [Validators.required]],
      userProfileOwner: ['-Select-', [Validators.required]],
      religion_id: ['-Select', [Validators.required]],
      userCaste: ['-Select-', [Validators.required]]

    })

    //calling religion api
    this.http.get(this.religionApi).subscribe((data) => {
      console.warn(data)
      this.religionList = data
    
    })

    //calling mother tongue api
    this.http.get(this.mothertongueApi).subscribe((data) => {
      console.warn(data)
      this.motherTongueList = data
     
    })

    this.http.get(this.profileOwnerApi).subscribe((data) => {
      console.warn(data)
      this.profileOwnerList = data
    })
    
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  
  onSubmit() {
    let basicSetup={
      "userName": this.registerForm.value.password,
      "userEmail": this.registerForm.value.email,
    }
    alert(this.registerForm.value.email);
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (this.submitted) {
      this.showModal = false;
    }
    //login user validation
    this.registerationDetails = this.formBuilder.group(basicSetup);
    this.http.post(this.userLoginApi, this.registerationDetails.value).subscribe
       ((data)=>{
         if(data==null)
         {
        
          this.router.navigate(['/firstregisteration'])
         }
         else{
           this.loginservice.loggedInUser(data);
          this.router.navigate(['/myprofile']);
          this.authService.setUserLoggedIn(true);
         }


       })
        
        
        // (this.router.navigate(['/preferences'])),error=>(this.onRegistrationSubmitError=true));


  }

}
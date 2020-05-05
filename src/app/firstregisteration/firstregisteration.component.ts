import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  casteApi = 'http://pavitrivandhanapi.herokuapp.com/caste/';
  religionApi = 'http://pavitrivandhanapi.herokuapp.com/allReligion';
  // casteApi = 'http://localhost:8080/caste/';
  // religionApi = 'http://localhost:8080/allReligion';

  castelist(valueReligions) {

    this.casteApi = this.casteApi;
    alert(this.casteApi)
    this.http.get(this.casteApi + valueReligions).subscribe((data) => {
      console.warn(data)
      this.castes = data;
    })

  }
  //submiting the login details
  onRegisterDetailsSubmit() {
  
    alert(this.registerationDetails.value.f_name + this.registerationDetails.value.mail + this.registerationDetails.value.gender + this.registerationDetails.value.m_tongue
   
      + this.registerationDetails.value.profile_for + this.registerationDetails.value.userReligion + this.registerationDetails.value.userCaste);
  
    }



  //Login Pop start from here

  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {



  }
  show() {
    this.showModal = true; // Show-Hide Modal Check

  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.registerationDetails = this.formBuilder.group({
      f_name: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      m_tongue: ['', [Validators.required]],
      profile_for: ['', [Validators.required]],
      userReligion: ['', [Validators.required]],
      userCaste: ['', [Validators.required]]

    })

    //calling religion api
    this.http.get(this.religionApi).subscribe((data) => {
      console.warn(data)
      this.religionList = data
      this.religionList
    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  onSubmit() {
    alert(this.registerForm.value.email);
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (this.submitted) {
      this.showModal = false;
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

  saveRegistrationDetails = 'http://localhost:8080/userDetails';
  casteApi = 'https://pavitrivandhanapi.herokuapp.com/caste/';
  religionApi = 'https://pavitrivandhanapi.herokuapp.com/allReligion';
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

    alert(this.registerationDetails.value.userName + this.registerationDetails.value.userEmail + this.registerationDetails.value.userGender + this.registerationDetails.value.userMotherTongue

      + this.registerationDetails.value.userProfileOwner + this.registerationDetails.value.religion_id + this.registerationDetails.value.caste_id);

    if (this.registerationDetails.value.userName == '') {
      this.router.navigate(['/firstregisteration']);

    }
    else {


      console.warn(this.registerationDetails);
      this.http.post(this.saveRegistrationDetails, this.registerationDetails.value).subscribe((data: any[]) => {

        console.warn(data)

      })
      // this.router.navigate(['/inforamtionpage']);
    }
  }



  //Login Pop start from here

  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {



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
      userName: ['', [Validators.required]],
      userEmail: ['', [Validators.required, Validators.email]],
      userGender: ['', [Validators.required]],
      userMotherTongue: ['-Select-', [Validators.required]],
      userProfileOwner: ['-Select-', [Validators.required]],
      religion_id: ['-Select', [Validators.required]],
      caste_id: ['-Select-', [Validators.required]]

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
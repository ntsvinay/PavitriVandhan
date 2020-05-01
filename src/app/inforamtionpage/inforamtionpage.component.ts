import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inforamtionpage',
  templateUrl: './inforamtionpage.component.html',
  styleUrls: ['./inforamtionpage.component.css'],
})
export class InforamtionpageComponent implements OnInit {
  states = ['-Select-'];
  cityOfState = ['-Select-'];
  matrialStatus = ['-Select-', 'Never married', 'Widow', 'Divorced'];
  countries = ['-Select-', 'India', 'America', 'Canada', 'Austreliya'];
  stateOfIndia = ['-Select-', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat'];
  cityOfAndhraPradesh = ['-Select-', 'Anantapur', 'Anantapur', 'Chittoor', 'East Godavari', 'East Godavari'];
  cityOfArunachalPradesh = ['-Select-', 'Anjaw', 'Changlang', 'Dibang Valley', 'East Kameng', 'East Siang	', 'Kamle', 'Kra Daadi'];

  constructor() { }
  stateList(selectedCountry) {
    if (selectedCountry == 'India') {
      this.states = this.stateOfIndia;
    }
  }
  districtList(selectedState) {
    if (selectedState == 'Andhra Pradesh') {
      this.cityOfState = this.cityOfAndhraPradesh;

    }
    else if (selectedState == 'Arunachal Pradesh') {
      this.cityOfState = this.cityOfArunachalPradesh;

    }
    else {

    }
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-matched-profile',
  templateUrl: './matched-profile.component.html',
  styleUrls: ['./matched-profile.component.css']
})
export class MatchedProfileComponent implements OnInit {

  apiData;
  apiUrl='https://jsonplaceholder.typicode.com/users';
  constructor( private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.apiUrl).subscribe((data)=>{console.warn(data)
    this.apiData=data;}
    )
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-matched-profile',
  templateUrl: './matched-profile.component.html',
  styleUrls: ['./matched-profile.component.css']
})
export class MatchedProfileComponent implements OnInit {

  apiData;
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.apiUrl).subscribe((data) => {
      console.warn(data)
      this.apiData = data;
    }
    )
  }
  public shortList_userId=[];
  public icon = 'assets/images/icon_1.png';
  public icon1 = 'assets/images/icon_2.png';
  public btnId=0; 

  shortlist(val) {
    if(!this.shortList_userId.includes((val))){
    this.shortList_userId.push(val);
    
    }
    else{
      const index: number = this.shortList_userId.indexOf(val);
      if(index!=-1){
      this.shortList_userId.splice(index,1);
     
      }
    }
  }

}

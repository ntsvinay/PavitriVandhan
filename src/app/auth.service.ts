import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface userData{
success:boolean;
message:String;

}

@Injectable()
export class AuthService {
loggedInStatus=false;
  constructor(private http:HttpClient) { }

setUserLoggedIn(value:boolean)
{
  this.loggedInStatus=value;
}
  get isUserLoggedIn(){

    return this.loggedInStatus;
  }
getLoggedInUserDetails()
{

}
}

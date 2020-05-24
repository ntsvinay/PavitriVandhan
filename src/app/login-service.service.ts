import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable()
export class LoginServiceService {

  private loggedInUserDetails=new BehaviorSubject<Object> ("");
  currentLoggedInUser=this.loggedInUserDetails.asObservable;

  constructor() { }
}

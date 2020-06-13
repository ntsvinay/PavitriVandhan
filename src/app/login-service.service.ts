import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class LoginServiceService {


  private test=new BehaviorSubject<Object>('');
  msg=this.test.asObservable();
  constructor() { }
  loggedInUser(msg1: Object)
  {
this.test.next(msg1);
  }
}

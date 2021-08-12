import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User = new User();
  // the aim of this service is to identify whether the user has logged in or not
  constructor() { }

  isAuthenticated() : boolean {
    // from local storage (cache) we read the value of username
    // if username had loggedIn == true then user is authenticated
    this.user.username = window.sessionStorage.getItem('username');
    let isLoggedIn = window.sessionStorage.getItem('isLoggedIn');
    if(isLoggedIn == 'true')
      return true
    return false;
  }
}

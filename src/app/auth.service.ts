import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;
  constructor() { }

  login(){
    this.isLoggedIn=true;
    console.log('logged in');
  }

  logout(){
    this.isLoggedIn=false;
  }

  isAuthenticated():boolean{
    return this.isLoggedIn;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  isLoggedIn() {
    let status = false;      
     if (localStorage.getItem('isLoggedIn') == "true") {      
        status = true;      
     }
       else {      
        status = false;      
        }      
     return status;   
  }
}

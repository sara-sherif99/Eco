import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
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
  /*getUserById(id:any){
   this.user = this.http.get(`http://localhost:3000/user/${id}`);
  }*/
}

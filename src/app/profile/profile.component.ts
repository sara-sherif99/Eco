import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user:any;
  edit:boolean=false;
  constructor(public auth: LoginService,private http: HttpClient){
  }
  form = new FormGroup({
    username: new FormControl(null),
    email: new FormControl(null,Validators.email),
    password: new FormControl(null),
    address: new FormControl(null),
    phone:new FormControl(null)
  });
  ngOnInit(){
    this.user=JSON.parse(localStorage.getItem('user') || '{}');
  }
  openEditView(){
    this.edit=!this.edit;
  }
  Edit(){
    console.log(localStorage.getItem('token'))
    var userName = this.form.controls["username"].value || this.user.userName;
    var email = this.form.controls["email"].value || this.user.email;
    var password = this.form.controls["password"].value;
    var address = this.form.controls["address"].value || this.user.address;
    var phone = this.form.controls["phone"].value || this.user.phone;
    console.log(this.user.email,email)
    this.http.patch<any>(`http://localhost:3000/user/${this.user._id}`, 
    { userName, email, password, address, phone },  
    {headers: new HttpHeaders().set('Authorization', `${localStorage.getItem('token')}`)}).subscribe(
        (response) => {
          this.user=response.user;
          localStorage.setItem('user', JSON.stringify(this.user));
          this.edit=!this.edit;
        },
        (error) => {
          console.log(error);
        }
      );
      
  }
}

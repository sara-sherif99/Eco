import { ChangeDetectorRef, Component, Inject, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router, Routes, RouterLinkActive ,RouterModule } from '@angular/router';
import { faEye, faSeedling, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  errorHandleLog:boolean = false;
  errorHandleSign:boolean = false;
  msg:any;
  log:boolean=true;
  sign:boolean=false;

  faEye=faEye;
  faSeedling=faSeedling;
  faEyeSlash=faEyeSlash;

  submitted: boolean=false;

  showLog: boolean = false;
  passwordLog() {
      this.showLog = !this.showLog;
  }

  logForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required)
    
  });

  show: boolean = false;
  showConf: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private changeDetector: ChangeDetectorRef,
    private http: HttpClient,
    private cookieService: CookieService,
    public dialogRef:  MatDialogRef<AuthComponent>,
    private auth: LoginService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  form = new FormGroup({
    username: new FormControl(null,Validators.required),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,Validators.required),
    confirmPassword:new FormControl(null,Validators.required),
    gender: new FormControl('Male')
    
  });
  

  activeLog(){
    this.log=true;
    this.sign=false;
  }
  activeSign(){
    this.log=false;
    this.sign=true;
  }
  Login(){
    this.submitted=true
    var email=this.logForm.controls["email"].value;
    var password=this.logForm.controls["password"].value;

    if(this.logForm.get('password')?.valid && this.logForm.get('email')?.valid){
      this.http.post<any>('http://localhost:3000/user/login', {email,password}).subscribe(
      (response) => {
        localStorage.setItem('isLoggedIn', "true"); 
        this.cookieService.set('token',response.token);
        this.dialogRef.close();
      },
      (error) => {
        this.errorHandleLog=true;
        this.msg=error.error.message;
      }
    );
    }
    
  }
  password() {
    this.show = !this.show;
}
confirmpassword() {
  this.showConf = !this.showConf;
}
Signup(){
  var userName=this.form.controls["username"].value;
  var email=this.form.controls["email"].value;
  var password=this.form.controls["password"].value;
  var confirmpassword=this.form.controls["confirmPassword"].value;
  var gender=this.form.controls["gender"].value;
  
  if(password==confirmpassword &&this.form.get('password')?.valid && this.form.get('email')?.valid &&this.form.get('username')?.valid){
    this.http.post<any>('http://localhost:3000/user/signup', {userName,email,password,gender}).subscribe(
    (response) => {
      this.cookieService.set('token',response.token);
      localStorage.setItem('isLoggedIn','true');  
      this.dialogRef.close();
    },
    (error) => {
      this.errorHandleSign=true;
      this.msg=error.error.message;
    }
  );
  }
}
}
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

export interface DialogData {
  title: string;
  content:string;
  deadline: string;
  dateCreated:string;
  id:any; 
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  minDate = new Date();
  cookie_name:any="";

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  Edit(){
    //this.cookie_name=this.cookieService.get('token');
    //var token=this.cookieService.get('token');
    /*var url = 'http://localhost:3000/'+this.data.id;
    this.http.patch<any>(url, {token,todo:this.data}).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => console.log(error)
    );*/
    location.reload();
    this.dialogRef.close();
  }
  
}

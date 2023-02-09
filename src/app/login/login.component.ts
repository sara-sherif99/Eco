import { HttpClient } from '@angular/common/http';
import { Component,Inject,OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

export interface DialogData {
  title: string;
  content:string;
  deadline: string;
  dateCreated:string;
  id:any; 
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  minDate = new Date();
  cookie_name:any="";
  title: any;
  content: any;
  deadline: any;
  id: any;

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog) {
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
  
  Signup(){
    
    this.dialogRef.close();
    const Signdialog = this.dialog.open(SignupComponent, {
      width: '300px',
      position: { top: '15vh',
      left: '40vw'} ,
      data: {title: this.title, content: this.content, deadline: this.deadline, id:this.id}
    });

  }
}

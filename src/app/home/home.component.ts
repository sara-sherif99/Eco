import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

export interface DialogData {
  title: string;
  content:string;
  deadline: string;
  dateCreated:string;
  id:any; 
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: any;
  content: any;
  deadline: any;
  id: any;
  constructor(public dialog: MatDialog){}
  Login(){
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px',
      position: { top: '15vh',
      left: '40vw'} ,
      data: {title: this.title, content: this.content, deadline: this.deadline, id:this.id}
    });
  }
}

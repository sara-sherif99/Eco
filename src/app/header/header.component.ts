import { Component, Directive } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  Router , ActivatedRoute,NavigationExtras } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  faSearch = faSearch;
  faUser = faUser;
  faSeedling=faSeedling;

  url:any; 
  colorHome: any ;
  colorAbout: any ;
  colorShop: any;
  token:any;

  loggedOut:boolean=true;
  constructor(public dialog: MatDialog,public router: Router,public route:ActivatedRoute,public cookieService:CookieService){}
  ngOnInit(){
    this.token=this.cookieService.get('token');
    if(this.token){
      this.loggedOut=false;
    }
    this.url=location.pathname
    this.colorHome = (this.url=='/'||this.url=='/home')?true:false;
    this.colorAbout = this.url=='/about'?true:false;
    this.colorShop  = this.url=='/shop'?true:false;
  } 
  Home() {
    this.colorHome  = true;
    this.colorAbout  = false;
    this.colorShop = false;
  }
  About() {
    this.colorAbout  = true;
    this.colorHome  = false;
    this.colorShop = false;
  }
  Shop() {
    this.colorShop  = true;
    this.colorAbout  = false;
    this.colorHome = false;
  }

  
  Login(){
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '350px',
      position: { top: '10vh',
      left: '40vw'},
    });
    dialogRef.afterClosed().subscribe(result => {
      this.token=this.cookieService.get('token');
      if(this.token){
        this.loggedOut=false;
      }
      
    });
  }
  Logout(){
    this.cookieService.delete('token');
    this.router.navigate(['/home']);
    location.reload();
  }
}

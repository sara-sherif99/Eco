import { Component, Directive, HostListener } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  Router , ActivatedRoute,NavigationExtras } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';
import { NavbarService } from '../services/navbar.service';

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

  constructor(public dialog: MatDialog,public router: Router,public route:ActivatedRoute,
    public cookieService:CookieService,public auth: LoginService,public nav:NavbarService){}
  ngOnInit(){
    /*this.url=location.pathname
    this.colorHome = (this.url=='/'||this.url=='/home'||this.url=='/index.html')?true:false;
    this.colorAbout = this.url=='/about'?true:false;
    this.colorShop  = this.url=='/shop'?true:false;*/
  } 
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let element = document.querySelector('#header') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('scroll');
    } else {
      element.classList.remove('scroll');
    }
  }
  
  Login(){
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '350px',
      panelClass: 'auth-dialog',
      /*position: { top: '10vh',
      left: '40vw'},*/
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  Logout(){
    localStorage.setItem('isLoggedIn','false');  
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/home']).then(function(){
      location.reload();
    });
  }
}

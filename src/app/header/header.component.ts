import { Component, Directive, HostListener } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  Router , ActivatedRoute,NavigationExtras } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';

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
    public cookieService:CookieService,public auth: LoginService){}
  ngOnInit(){
    this.url=location.pathname
    console.log(this.url);
    this.colorHome = (this.url=='/'||this.url=='/home'||this.url=='/index.html')?true:false;
    this.colorAbout = this.url=='/about'?true:false;
    this.colorShop  = this.url=='/shop'?true:false;
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
    });
  }
  Logout(){
    localStorage.setItem('isLoggedIn','false');  
    this.cookieService.delete('token');
    this.router.navigate(['/home']);
    location.reload();
  }
}

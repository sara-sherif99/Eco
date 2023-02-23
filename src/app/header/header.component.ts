import { Component, Directive, HostListener, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  Router , ActivatedRoute,NavigationExtras } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';
import { NavbarService } from '../services/navbar.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  faSearch = faSearch;
  faUser = faUser;
  faSeedling=faSeedling;
  faCartShopping=faCartShopping;
  faHeart=faHeart;

  url:any; 
  user:any;
  colorHome: any ;
  colorAbout: any ;
  colorShop: any;
  colorCart:any;
  token:any;
  products:any;
  constructor(public dialog: MatDialog,public router: Router,public route:ActivatedRoute,
    public cookieService:CookieService,public auth: LoginService,public nav:NavbarService
    ,public cart:CartComponent){
      this.user=JSON.parse(localStorage.getItem('user') || '{}');
      if(Object.keys(this.user).length != 0){
        nav.cart=this.user.cart.length;
        nav.wishlist=this.user.wishlist.length;
      }
    }

  ngOnInit(){
    // this.user=JSON.parse(localStorage.getItem('user') || '{}');
    // this.products= this.user.cart;
    /*this.url=location.pathname
    this.colorHome = (this.url=='/'||this.url=='/home'||this.url=='/index.html')?true:false;
    this.colorAbout = this.url=='/about'?true:false;
    this.colorShop  = this.url=='/shop'?true:false;*/
  } 

  Cart() {
    this.colorShop  = false;
    this.colorAbout  = false;
    this.colorHome = false;
    this.colorCart =true;
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
  send(event:any){
    this.nav.search = event.target.value;
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

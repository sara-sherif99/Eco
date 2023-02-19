import { Component } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { ProductService } from '../services/product.service';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { SingleProductComponent } from '../single-product/single-product.component';
import { AuthComponent } from '../auth/auth.component';
import { MatDialog } from '@angular/material/dialog';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent {
  selected = '';
  faSync=faSync;
  faShoppingCart=faShoppingCart;
  constructor(public nav:NavbarService,public myService: ProductService,public dialog: MatDialog){}
  products:any;
  x:any;
  items=['All','Kitchen','Tools','Wood','Other'];
  activeIndex=0;
// Calling Api [ngOnInit]
  ngOnInit(): void {    
    this.nav.home=false;
    this.nav.about=false;
    this.nav.shop=true;

    this.myService.getAllProducts().subscribe(
      {
        next:(res:any)=>{
          // console.log(res)
          this.products = res;
          this.products.map((el:any)=>{el.priceAfterSale=el.price*(1-el.sale/100)})
          console.log(this.products)
        }
        ,error(err){console.log(err)}
      }
    )
    //this.products = this.myService.allProducts;
    
  }
  filter(str:any){
    this.x=str;
  }
  Open(product:any){
      const dialogRef = this.dialog.open(SingleProductComponent, {
        panelClass: 'product-dialog',
        data:product
        /*position: { top: '10vh',
        left: '40vw'},*/
      });
  }

  minValue: number = 0;
  maxValue: number = 500;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '$' + value;
        case LabelType.High:
          return '$' + value;
        default:
          return '$' + value;
      }
    }
  };
  p: any = 1;
  count: any = 6;
  /*products:any=[
    {imgsrc:"../../assets/img/products/product-img-1.jpg",price:20,id:123,name:'Strawberry',brand:"",cat:""},
    {imgsrc:"../../assets/img/products/product-img-1.jpg",price:20,id:123,name:'Strawberry',brand:"",cat:""},
    {imgsrc:"../../assets/img/products/product-img-1.jpg",price:20,id:123,name:'Strawberry',brand:"",cat:""},
    {imgsrc:"../../assets/img/products/product-img-1.jpg",price:20,id:123,name:'Strawberry',brand:"",cat:""},
    {imgsrc:"../../assets/img/products/product-img-1.jpg",price:20,id:123,name:'Strawberry',brand:"",cat:""},
    {imgsrc:"../../assets/img/products/product-img-1.jpg",price:20,id:123,name:'Strawberry',brand:"",cat:""}];
  
*/

}

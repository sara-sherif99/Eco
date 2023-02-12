import { Component,OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(public myService:ProductService){}

  faShippingFast=faShippingFast;
  faPhoneVolume=faPhoneVolume;
  faSync=faSync;
  faShoppingCart=faShoppingCart;

  products:any;
// Calling Api [ngOnInit]
  ngOnInit(): void {
     this.myService.getAllProducts().subscribe(
       {
         next:(res)=>{
           // console.log(res)
           this.products = res;
           // console.log(this.students)
         }
         ,error(err){console.log(err)}
       }
     )
   }
}
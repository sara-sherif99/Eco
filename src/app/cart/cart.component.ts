import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products: any = [
    { imgsrc: "../../assets/img/products/product-img-1.jpg", price: 20, id: 10, name: 'Strawberry', brand: "", cat: "", quantity: 3 },
    { imgsrc: "../../assets/img/products/product-img-1.jpg", price: 30, id: 20, name: 'Strawberry', brand: "", cat: "", quantity: 1 },
    { imgsrc: "../../assets/img/products/product-img-1.jpg", price: 50, id: 30, name: 'Strawberry', brand: "", cat: "", quantity: 4 },

  ];
  removeItem(_id: number) {
    this.products = this.products.filter(
      (el: any) => {
        return el.id !== _id;
      }
    );
  }

  get geTotal() {
    let total = 0;
    this.products.forEach((element: any) => {
      total += element.price * element.quantity;
    });
    return total;
  }
  get allTotal() {
    let alltotal = 0;
    let shipping = 45;
    return alltotal = shipping + this.geTotal;
  }
  increase(_id: any) {
    this.products.forEach((element: any) => {
      if (element.id == _id) { element.quantity++; }
    })
  }
  decrease(_id: any) {
    this.products.forEach((element: any) => {
      if (element.id == _id && element.quantity !== 0) { element.quantity--; }
    })
  }

}

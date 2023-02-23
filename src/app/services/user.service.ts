import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private myClient: HttpClient) {

  }
  private userURL = "http://localhost:3000/user";
  addToWishList(userId: any, productId: any) {
    return this.myClient.patch<any>(`${this.userURL}/wishlist/${userId}`, {productId:productId});
  }

  removeFromWishList(userId: any, productId: any) {
    return this.myClient.delete<any>(`${this.userURL}/wishlist/${userId}/${productId}`);
  }

  addToCart(userId: any, productId: any,amount:any) {
    return this.myClient.patch<any>(`${this.userURL}/cart/${userId}`, {productId:productId,amount:amount});
  }

  removeFromCart(userId: any, productId: any) {
    return this.myClient.delete<any>(`${this.userURL}/cart/${userId}/${productId}`);
  }
}

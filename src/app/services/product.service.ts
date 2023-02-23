import { Injectable ,OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private myClient: HttpClient) { }
  // private BaseURL = "https://jsonplaceholder.typicode.com/users";
    private productURL = "http://localhost:3000/product";

    //Methods

  // 1)Get All product
  getAllProducts(){
    return this.myClient.get(this.productURL);
  }

  // 2)Get Product By ID
  getProductByID(id:any){
    // return this.myClient.get(this.BaseURL+"/"+id);
    return this.myClient.get(`${this.productURL}/${id}`);
  }

  
}

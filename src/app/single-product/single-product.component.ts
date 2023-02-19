import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { faHeart as faHeartFill} from '@fortawesome/free-solid-svg-icons' ;
import { faHeart as faHeart} from '@fortawesome/free-regular-svg-icons' ;


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {
  faHeartFill=faHeartFill;
  faHeart=faHeart;
  added:boolean=false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  ngOnInit() {
    // will log the entire data object
    console.log(this.data)
  }
  WishList(){
    this.added=!this.added;
  }
}

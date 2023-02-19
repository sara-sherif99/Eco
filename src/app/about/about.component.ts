import { Component } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillAlt} from '@fortawesome/free-solid-svg-icons';
import { NavbarService } from '../services/navbar.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  faSyncAlt=faSyncAlt;
  faBriefcase=faBriefcase;
  faShippingFast=faShippingFast;
  faMoneyBillAlt=faMoneyBillAlt;

  constructor(public nav:NavbarService){}
  ngOnInit(){
    this.nav.about=true;
    this.nav.home=false;
    this.nav.shop=false;
  }
}

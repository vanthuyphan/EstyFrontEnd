import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup, Validators, FormBuilder, FormControl, NgForm } from '@angular/forms';
import {IProductState,addProduct, getDatas} from "./store";
@Component({
  selector: 'app-myshop',
  templateUrl: './myshop.component.html',
  styleUrls: ['./myshop.component.css'],
  animations:[routerTransition()]
})
export class MyshopComponent implements OnInit {
  
  products = getDatas();
  constructor() {
    
  }

  ngOnInit() {

  }
  filterSold(item,checked){
    console.log("--->" + item + " " + checked);
    if (checked == true ) {
      if ( item == null ) return true;
      if ( item.status == "sold") return true;
      return false;
    }

    return true;
  }
  deleteProduct(item){

    this.products.forEach( (it, index) => {
      if(it === item) this.products.splice(index,1);
    });
    console.log("======>" + item);
  }


}

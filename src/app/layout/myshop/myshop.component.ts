import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

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

}

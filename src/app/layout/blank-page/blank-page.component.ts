import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { getProductsInsale } from '../../data/datas'
@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss'],
    animations :[routerTransition()]
})
export class BlankPageComponent implements OnInit {
    current_products = getProductsInsale(); 
    constructor() {}

    ngOnInit() {}

    buyProduct( product ){
        console.log(product);
    }
}

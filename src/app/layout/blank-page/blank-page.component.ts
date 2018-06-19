import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import API from "../../API/API";
@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss'],
    animations :[routerTransition()]
})
export class BlankPageComponent implements OnInit {
    current_products = [];
    constructor() {}

    ngOnInit() {
        API.activeProducts((products => {
            this.current_products = products
        }));
    }

    buyProduct( productID ){
        API.buy(productID, () => {
            API.activeProducts((products => {
                this.current_products = products
            }));
        });
    }

}

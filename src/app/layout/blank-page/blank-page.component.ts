import { Component, OnInit, Input } from '@angular/core';
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

    searchValue : string;
    constructor() {}

    ngOnInit() {}

    buyProduct( product ){
        console.log(product);
    }

    search(value){
        this.searchValue = value; 
        console.log("====>" + value);
    }
    isDisplay( item , value ){
        if (value == null || value == "") return true;
        if ( item.name.indexOf(value) >= 0 ) return true;
        if ( item.desc.indexOf(value) >= 0 ) return true;
        return false;
    }
}

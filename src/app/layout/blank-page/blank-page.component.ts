import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import API from "../../API/API";


@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss'],
    animations :[routerTransition()]
})
export class BlankPageComponent implements OnInit {
    current_products = [];
    searchValue : string;
    buyProductForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
        this.buyProductForm = this.formBuilder.group({
            'name': new FormControl('', [Validators.required]),
            'shipping': new FormControl('', [Validators.required])
        });
    }

    ngOnInit() {
        API.activeProducts((products => {
            this.current_products = products
        }));
    }

    buyProduct( product, userValue){
        API.buy(product, userValue, () => {
            API.activeProducts((products => {
                this.current_products = products
            }));
        });
    }

    search(value){
        this.searchValue = value; 
        console.log("====>" + value);
    }

    isDisplay( item , value ){
        if (value == null || value == "") return true;
        if ( item.name && item.name.indexOf(value) >= 0 ) return true;
        if ( item.description && item.description.indexOf(value) >= 0 ) return true;
        return false;
    }
}

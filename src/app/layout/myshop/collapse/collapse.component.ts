import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, NgForm } from '@angular/forms';
import {IProductState,addProduct, getDatas} from "./../store";
import { NgRedux } from '@angular-redux/store';

@Component({
    selector: 'app-collapse',
    templateUrl: './collapse.component.html',
    styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent {
    productCreateForm: FormGroup;
    products = getDatas();
    constructor(private formBuilder: FormBuilder) {
            this.productCreateForm = this.formBuilder.group({
            'name': new FormControl('', [Validators.required]),
            'desc': new FormControl('', [Validators.required]),
            'price': new FormControl('', [Validators.required]),
        });
    }

    ngOnInit() {

    }

    createProduct(f) {
        addProduct(f , '1' , 'name ');
    }

}

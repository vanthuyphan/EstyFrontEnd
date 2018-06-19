import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyshopRoutingModule } from './myshop-routing.module';
import { MyshopComponent } from './myshop.component';
import { CollapseComponent } from './collapse/collapse.component';
// use FormsModule Only when using Template Driven Forms
import { FormsModule } from '@angular/forms';
// use ReactiveFormsModule Only when using Template Driven Forms
import { ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from "../../shared/modules/shared.module";
import { IProductState, rootReduce, INITIAL_STATE } from './store';
import { NgRedux } from '@angular-redux/store';
import { FormGroup, Validators, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';

import { MdePopoverModule } from '@material-extended/mde';


@NgModule({

    imports: [CommonModule, MyshopRoutingModule ,FormsModule,ReactiveFormsModule,SharedModule,MatButtonModule, MatCardModule, MatToolbarModule,MdePopoverModule ],
    declarations: [MyshopComponent]

})
export class MyshopModule {

    constructor () {
       // ngRedux.configureStore(rootReduce, INITIAL_STATE);
    }

}
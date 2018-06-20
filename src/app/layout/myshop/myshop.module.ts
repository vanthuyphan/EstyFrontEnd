import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MyshopRoutingModule} from "./myshop-routing.module";
import {MyshopComponent} from "./myshop.component";
// use FormsModule Only when using Template Driven Forms
// use ReactiveFormsModule Only when using Template Driven Forms
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/modules/shared.module";
import {MatButtonModule, MatCardModule, MatToolbarModule} from "@angular/material";

import {MdePopoverModule} from "@material-extended/mde";


@NgModule({

    imports: [CommonModule, MyshopRoutingModule ,FormsModule,ReactiveFormsModule,SharedModule,MatButtonModule, MatCardModule, MatToolbarModule,MdePopoverModule ],
    declarations: [MyshopComponent]

})
export class MyshopModule {

    constructor () {
       // ngRedux.configureStore(rootReduce, INITIAL_STATE);
    }

}
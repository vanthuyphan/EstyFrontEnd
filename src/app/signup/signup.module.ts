import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';


import {SharedModule} from "../shared/modules/shared.module";
import {SignupRoutingModule} from "./signup-routing.module";
import {SignupComponent} from "./signup.component";
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IUserState, rootReducer, INITIAL_STATE } from './store';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        SignupRoutingModule,
        NgReduxModule
    ],
    declarations: [
        SignupComponent
    ],
})
export class SignupModule {
    constructor (ngRedux: NgRedux<IUserState>) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}

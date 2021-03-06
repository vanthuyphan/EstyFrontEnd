import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {SharedModule} from "../shared/modules/shared.module";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginComponent} from "./login.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        LoginRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
})
export class LoginModule {
}

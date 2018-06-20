import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {BlankPageRoutingModule} from "./blank-page-routing.module";
import {BlankPageComponent} from "./blank-page.component";
import {
    MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatRippleModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [CommonModule, BlankPageRoutingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        FormsModule, ReactiveFormsModule, MatButtonModule,
        MatCardModule, MatToolbarModule],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {
}

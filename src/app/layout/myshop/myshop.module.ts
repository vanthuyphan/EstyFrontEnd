import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyshopRoutingModule } from './myshop-routing.module';
import { MyshopComponent } from './myshop.component';
import { CollapseComponent } from './collapse/collapse.component';

@NgModule({
    imports: [CommonModule, MyshopRoutingModule ],
    declarations: [MyshopComponent , CollapseComponent]
})
export class MyshopModule {}
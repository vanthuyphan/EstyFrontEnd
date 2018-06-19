import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoldRoutingModule } from './sold-routing.module';
import { SoldComponent } from './sold.component';

@NgModule({
    imports: [CommonModule, SoldRoutingModule ],
    declarations: [ SoldComponent ]
})
export class SoldModule {}
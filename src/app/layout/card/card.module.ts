import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';

@NgModule({
    imports: [CommonModule, CardRoutingModule ],
    declarations: [CardComponent ]
})
export class CardModule {}
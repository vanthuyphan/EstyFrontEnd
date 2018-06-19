import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {ProductsComponent} from './products/products.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', loadChildren: './blank-page/blank-page.module#BlankPageModule' },

            {path: 'myshop', loadChildren: './myshop/myshop.module#MyshopModule'},
            {path: 'card', loadChildren: './card/card.module#CardModule'},
            {path: 'sold', loadChildren: './sold/sold.module#SoldModule'},
            {path: 'product', loadChildren: './products/products.module#ProductsModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

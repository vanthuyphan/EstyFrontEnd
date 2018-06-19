import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyshopComponent } from './myshop.component';

const routes: Routes = [
    {
        path: '',
        component: MyshopComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyshopRoutingModule {}

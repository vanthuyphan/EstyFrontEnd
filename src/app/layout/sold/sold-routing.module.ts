import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoldComponent } from './sold.component';

const routes: Routes = [
    {
        path: '',
        component: SoldComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SoldRoutingModule {}

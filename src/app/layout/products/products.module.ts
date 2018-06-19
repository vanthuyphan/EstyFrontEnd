import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {ProductRoutingModule} from "./products-routing.module";

import {ProductListComponent, RemoveProductDialogComponent} from "./product-list/product-list.component";
import {ProductService} from "./shared/product.service";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductsComponent} from "./products.component";
import {SharedModule} from "../../shared/modules/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    RemoveProductDialogComponent,
    ProductDetailComponent
  ],
  entryComponents: [
    RemoveProductDialogComponent
  ],
  providers: [
    ProductService
  ]
})

export class ProductsModule {
}

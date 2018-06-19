import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {ProductRoutingModule} from "./products-routing.module";
import {SharedModule} from "../../shared/modules/shared.module";

import {ProductListComponent, RemoveProductDialogComponent} from "./product-list/product-list.component";
import {ProductService} from "./sharedp/product.service";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductsComponent} from "./products.component";

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

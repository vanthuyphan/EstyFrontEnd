import {Component, OnInit} from "@angular/core";
import {Product} from "../shared/product.model";
import {ProductService} from "../shared/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hero-top',
  templateUrl: './product-top.component.html',
  styleUrls: ['./product-top.component.scss']
})
export class ProductTopComponent implements OnInit {

  products: Product[] = null;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      console.log("Done fetching products");
      this.products = products;
    });
  }

  seeProductDetails(product): void {
    if (product.default) {
      this.router.navigate(['products/' + product.id]);
    }
  }
}

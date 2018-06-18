import {Component, OnInit} from '@angular/core';
import {Product} from '../shared/product.model';
import {ProductService} from '../shared/product.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {

  hero: Product;
  canVote: boolean;

  constructor(private productService: ProductService,
              private location: Location,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const heroId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getHeroById(heroId).subscribe((hero: Product) => {
      this.hero = hero;
    });
  }

  like(product: Product) {
    return new Promise((resolve, reject) => {
      this.productService.like(product).subscribe(() => {
        this.canVote = ProductService.checkIfUserCanVote();
        resolve(true);
      }, (error) => {
        reject(error);
      });
    });
  }

  dynamicImport() {
    /*import('html2canvas').then((html2canvas: any) => {
      html2canvas.default(document.getElementById('heroe-detail')).then((canvas) => {
        window.open().document.write('<img src="' + canvas.toDataURL() + '" />');
      });
    });*/
  }

  goBack(): void {
    this.location.back();
  }
}

import {Component, OnInit} from '@angular/core';
import {Product} from '../shared/product.model';
import {ProductService} from '../shared/product.service';
import {AppConfig} from '../../config/app.config';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hero-top',
  templateUrl: './product-top.component.html',
  styleUrls: ['./product-top.component.scss']
})
export class ProductTopComponent implements OnInit {

  heroes: Product[] = null;
  canVote = false;

  constructor(private productService: ProductService,
              private router: Router) {
    this.canVote = ProductService.checkIfUserCanVote();
  }

  ngOnInit() {
    this.productService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes.sort((a, b) => {
        return b.likes - a.likes;
      }).slice(0, AppConfig.topHeroesLimit);
    });
  }

  like(hero: Product): Promise<any> {
    return new Promise((resolve, reject) => {
      this.productService.like(hero).subscribe(() => {
        this.canVote = ProductService.checkIfUserCanVote();
        resolve(true);
      }, (error) => {
        reject(error);
      });
    });
  }

  seeHeroDetails(hero): void {
    if (hero.default) {
      this.router.navigate([AppConfig.routes.products + '/' + hero.id]);
    }
  }
}

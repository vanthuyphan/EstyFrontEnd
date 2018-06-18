import {map, startWith} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../shared/logger.service';
import {Product} from '../../products/shared/product.model';
import {FormControl} from '@angular/forms';
import {ProductService} from '../../products/shared/product.service';
import {Router} from '@angular/router';
import {AppConfig} from '../../config/app.config';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [
    LoggerService
  ]
})

export class SearchBarComponent implements OnInit {

  defaultHeroes: Array<Product>;
  heroFormControl: FormControl;
  filteredHeroes: any;

  constructor(private heroService: ProductService,
              private router: Router) {
    this.defaultHeroes = [];
    this.heroFormControl = new FormControl();
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe((heroes: Array<Product>) => {
      this.defaultHeroes = heroes.filter(hero => hero['default']);

      this.heroFormControl.valueChanges.pipe(
        startWith(null),
        map(value => this.filterHeroes(value)))
        .subscribe(heroesFiltered => {
          this.filteredHeroes = heroesFiltered;
        });
    });
  }

  filterHeroes(val: string): Product[] {
    return val ? this.defaultHeroes.filter(hero => hero.name.toLowerCase().indexOf(val.toLowerCase()) === 0 && hero['default'])
      : this.defaultHeroes;
  }

  searchHero(hero: Product): Promise<boolean> {
    LoggerService.log('Moved to hero with id: ' + hero.id);
    return this.router.navigate([AppConfig.routes.products + '/' + hero.id]);
  }
}

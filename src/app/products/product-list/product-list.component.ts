import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from '../shared/product.model';
import {ProductService} from '../shared/product.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {AppConfig} from '../../config/app.config';
import {Router} from '@angular/router';
import {LoggerService} from '../../core/shared/logger.service';

@Component({
  selector: 'app-remove-hero-dialog',
  templateUrl: './remove-product.dialog.html',
})

export class RemoveProductDialogComponent {
  constructor() {
  }
}

@Component({
  selector: 'app-hero-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  heroes: Product[];
  newHeroForm: FormGroup;
  canVote = false;
  error: string;
  @ViewChild('form') myNgForm; // just to call resetForm method

  constructor(private heroService: ProductService,
              private dialog: MatDialog,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.canVote = ProductService.checkIfUserCanVote();

    this.newHeroForm = this.formBuilder.group({
      'name': new FormControl('', [Validators.required]),
      'alterEgo': new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe((heroes: Array<Product>) => {
      this.heroes = heroes.sort((a, b) => {
        return b.likes - a.likes;
      });
    });
  }

  like(hero: Product) {
    this.heroService.like(hero).subscribe(() => {
      this.canVote = ProductService.checkIfUserCanVote();
    }, (error: Response) => {
      LoggerService.error('maximum votes limit reached', error);
    });
  }

  createNewHero(newHero: Product) {
    this.heroService.createHero(newHero).subscribe((newHeroWithId) => {
      this.heroes.push(newHeroWithId);
      this.myNgForm.resetForm();
    }, (response: Response) => {
      if (response.status === 500) {
        this.error = 'errorHasOcurred';
      }
    });
  }

  seeHeroDetails(hero): void {
    if (hero.default) {
      this.router.navigate([AppConfig.routes.products + '/' + hero.id]);
    }
  }

  remove(heroToRemove: Product): void {
    const dialogRef = this.dialog.open(RemoveProductDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.heroService.deleteHeroById(heroToRemove.id).subscribe(() => {
          this.heroService.showSnackBar('heroRemoved');
          this.heroes = this.heroes.filter(hero => hero.id !== heroToRemove.id);
        }, (response: Response) => {
          if (response.status === 500) {
            this.error = 'heroDefault';
          }
        });
      }
    });
  }
}

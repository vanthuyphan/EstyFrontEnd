import {Component, OnInit} from "@angular/core";
import {Meta, Title} from "@angular/platform-browser";
import {NavigationEnd, Router} from "@angular/router";
import {AppConfig} from "./config/app.config";
import {MatSnackBar} from "@angular/material";

declare const Modernizr;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  isOnline: boolean;

  constructor(private title: Title,
              private meta: Meta,
              private snackBar: MatSnackBar,
              private router: Router) {
    this.isOnline = navigator.onLine;
  }

  ngOnInit() {
    this.title.setTitle('Etsy');
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/':
            this.meta.updateTag({
              name: 'description',
              content: 'Etsy'
            });
            break;
          case '/' + AppConfig.routes.heroes:
            this.title.setTitle('Etsy');
            this.meta.updateTag({
              name: 'description',
              content: 'List of products'
            });
            break;
        }
      }
    });
  }

}

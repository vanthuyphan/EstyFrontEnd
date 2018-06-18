import {Component, Inject, OnInit} from "@angular/core";

import {APP_CONFIG, AppConfig} from "../../config/app.config";
import {IAppConfig} from "../../config/iapp.config";
import {ProgressBarService} from "../shared/progress-bar.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  appConfig: any;
  menuItems: any[];
  progressBarMode: string;

  constructor(@Inject(APP_CONFIG) appConfig: IAppConfig,
              private progressBarService: ProgressBarService) {
    this.appConfig = appConfig;
  }

  ngOnInit() {
    this.menuItems = [
      {link: '/', name: 'home'},
      {link: '/' + AppConfig.routes.products, name: 'Products'}
    ];
    this.progressBarService.updateProgressBar$.subscribe((mode: string) => {
      this.progressBarMode = mode;
    });
  }
}

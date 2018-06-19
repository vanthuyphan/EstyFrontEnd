import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {APP_CONFIG, AppConfig} from "./config/app.config";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/modules/shared.module";
import {CoreModule} from "./core/core.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {ProgressBarService} from "./core/shared/progress-bar.service";
import {ProgressInterceptor} from "./shared/interceptors/progress.interceptor";
import {TimingInterceptor} from "./shared/interceptors/timing.interceptor";
import {ServiceWorkerModule} from "@angular/service-worker";
import {environment} from "../environments/environment";

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    BrowserModule,
    
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    CoreModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,

   
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig},
    {provide: HTTP_INTERCEPTORS, useClass: ProgressInterceptor, multi: true, deps: [ProgressBarService]},
    {provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

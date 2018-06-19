import {ModuleWithProviders, NgModule} from "@angular/core";
import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgxExampleLibraryModule} from "@ismaestro/ngx-example-library";

@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule,
    NgxExampleLibraryModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    NgxExampleLibraryModule
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        
      ]
    };
  }
}

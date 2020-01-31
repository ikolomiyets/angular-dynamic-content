import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicComponentComponent } from './components/functional/dynamic-component/dynamic-component.component';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';
import { AtOneHeaderComponent } from './tenants/awesome-tenant-1/at-one-header/at-one-header.component';
import { AtTwoHeaderComponent } from './tenants/awesome-tenant-2/at-two-header/at-two-header.component';
import { ConfigService } from "./services/config/config.service";
import { AtTwoContentComponent } from './tenants/awesome-tenant-2/at-two-content/at-two-content.component';
import { AtTwoFooterComponent } from './tenants/awesome-tenant-2/at-two-footer/at-two-footer.component';
import { AtOneFooterComponent } from './tenants/awesome-tenant-1/at-one-footer/at-one-footer.component';
import { AtOneContentComponent } from './tenants/awesome-tenant-1/at-one-content/at-one-content.component';
import {AwesomeTenant1Module} from "./tenants/awesome-tenant-1/awesome-tenant-1.module";
import {AwesomeTenant2Module} from "./tenants/awesome-tenant-2/awesome-tenant-2.module";

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponentComponent,
    DynamicComponentDirective
  ],
  imports: [
    BrowserModule,
    AwesomeTenant1Module,
    AwesomeTenant2Module
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }

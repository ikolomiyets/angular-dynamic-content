import { Injectable } from '@angular/core';
import {AtOneHeaderComponent} from "../../tenants/awesome-tenant-1/at-one-header/at-one-header.component";
import { Config } from 'src/app/types/config';
import {AtTwoHeaderComponent} from "../../tenants/awesome-tenant-2/at-two-header/at-two-header.component";
import {AtTwoContentComponent} from "../../tenants/awesome-tenant-2/at-two-content/at-two-content.component";
import {AtOneContentComponent} from "../../tenants/awesome-tenant-1/at-one-content/at-one-content.component";
import {AtOneFooterComponent} from "../../tenants/awesome-tenant-1/at-one-footer/at-one-footer.component";
import {AtTwoFooterComponent} from "../../tenants/awesome-tenant-2/at-two-footer/at-two-footer.component";

@Injectable()
export class ConfigService {
  config = {
    'awesome-tenant-1' : {
      header: AtOneHeaderComponent,
      content: AtOneContentComponent,
      footer: AtOneFooterComponent
    },
    'awesome-tenant-2' : {
      header: AtTwoHeaderComponent,
      content: AtTwoContentComponent,
      footer: AtTwoFooterComponent
    }
  };

  getConfig(tenant: string) : Config {
      return this.config[tenant];
  }
}

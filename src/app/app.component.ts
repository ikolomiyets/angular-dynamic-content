import {Component, OnInit, Type} from '@angular/core';
import {ConfigService} from "./services/config/config.service";
import {Config} from "./types/config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  config: Config;
  component: Type<any>;
  title = 'angular-dynamic-loading';

  constructor(private configService: ConfigService) {
  }

  ngOnInit(): void {
    this.config = this.configService.getConfig('awesome-tenant-1');
  }
}

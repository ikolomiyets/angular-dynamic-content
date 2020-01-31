import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AtTwoHeaderComponent} from "./at-two-header/at-two-header.component";
import {AtTwoContentComponent} from "./at-two-content/at-two-content.component";
import {AtTwoFooterComponent} from "./at-two-footer/at-two-footer.component";



@NgModule({
  declarations: [
    AtTwoHeaderComponent,
    AtTwoContentComponent,
    AtTwoFooterComponent,
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    AtTwoHeaderComponent,
    AtTwoContentComponent,
    AtTwoFooterComponent,
  ],
  exports: [
    AtTwoHeaderComponent,
    AtTwoContentComponent,
    AtTwoFooterComponent,
  ]
})
export class AwesomeTenant2Module { }

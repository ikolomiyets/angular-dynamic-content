import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtOneHeaderComponent } from "./at-one-header/at-one-header.component";
import { AtOneContentComponent } from "./at-one-content/at-one-content.component";
import { AtOneFooterComponent } from "./at-one-footer/at-one-footer.component";



@NgModule({
  declarations: [
    AtOneHeaderComponent,
    AtOneContentComponent,
    AtOneFooterComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    AtOneHeaderComponent,
    AtOneContentComponent,
    AtOneFooterComponent
  ],
  exports: [
    AtOneHeaderComponent,
    AtOneContentComponent,
    AtOneFooterComponent
  ]
})
export class AwesomeTenant1Module { }

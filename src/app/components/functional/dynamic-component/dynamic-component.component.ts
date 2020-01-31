import {Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild} from '@angular/core';
import {DynamicComponentDirective} from "../../../directives/dynamic-component.directive";
import {AtOneHeaderComponent} from "../../../tenants/awesome-tenant-1/at-one-header/at-one-header.component";
import {AtTwoHeaderComponent} from "../../../tenants/awesome-tenant-2/at-two-header/at-two-header.component";

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit {
  @Input() component: Type<any>;
  @ViewChild(DynamicComponentDirective, {static: true}) content: DynamicComponentDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    if (!this.component) {
      this.component = AtOneHeaderComponent;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);

    const viewContainerRef = this.content.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }

}

import {Component} from '@angular/core';
import {HeaderComponent} from "../../../interfaces/header.component";

@Component({
  selector: 'app-at-two-header',
  templateUrl: './at-two-header.component.html',
  styleUrls: ['./at-two-header.component.css']
})
export class AtTwoHeaderComponent implements HeaderComponent {

  constructor() { }

}

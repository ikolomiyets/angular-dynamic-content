import {Component} from '@angular/core';
import {HeaderComponent} from "../../../interfaces/header.component";

@Component({
  selector: 'app-at-one-header',
  templateUrl: './at-one-header.component.html',
  styleUrls: ['./at-one-header.component.css']
})
export class AtOneHeaderComponent implements HeaderComponent {

  constructor() { }
}

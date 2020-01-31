import { Component } from '@angular/core';
import {ContentComponent} from "../../../interfaces/content.component";

@Component({
  selector: 'app-at-one-content',
  templateUrl: './at-one-content.component.html',
  styleUrls: ['./at-one-content.component.css']
})
export class AtOneContentComponent implements ContentComponent {

  constructor() { }

}

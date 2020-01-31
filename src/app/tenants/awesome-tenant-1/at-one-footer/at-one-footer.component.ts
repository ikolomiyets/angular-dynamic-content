import { Component } from '@angular/core';
import {FooterComponent} from "../../../interfaces/footer.component";

@Component({
  selector: 'app-at-one-footer',
  templateUrl: './at-one-footer.component.html',
  styleUrls: ['./at-one-footer.component.css']
})
export class AtOneFooterComponent implements FooterComponent {

  constructor() { }
}

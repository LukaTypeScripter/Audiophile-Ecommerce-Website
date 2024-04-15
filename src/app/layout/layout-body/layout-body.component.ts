import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {CartModalComponent} from "./cart-modal/cart-modal.component";

@Component({
  selector: 'audiophile-layout-body',
  standalone: true,
  imports: [
    RouterOutlet,
    CartModalComponent
  ],
  templateUrl: './layout-body.component.html',
  styleUrl: './layout-body.component.scss'
})
export class LayoutBodyComponent {

}

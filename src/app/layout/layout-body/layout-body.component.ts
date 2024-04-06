import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'audiophile-layout-body',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './layout-body.component.html',
  styleUrl: './layout-body.component.scss'
})
export class LayoutBodyComponent {

}

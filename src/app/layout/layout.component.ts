import { Component } from '@angular/core';
import {LayoutHeaderComponent} from "./layout-header/layout-header.component";
import {LayoutBodyComponent} from "./layout-body/layout-body.component";
import {LayoutFooterComponent} from "./layout-footer/layout-footer.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'audiophile-layout',
  standalone: true,
  imports: [
    LayoutHeaderComponent,
    LayoutBodyComponent,
    LayoutFooterComponent,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}

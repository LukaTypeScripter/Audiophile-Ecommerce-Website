import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {LayoutFooterComponent} from "./layout/layout-footer/layout-footer.component";
import {LayoutHeaderComponent} from "./layout/layout-header/layout-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, LayoutFooterComponent, LayoutHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'audiophile-ecommerce-website';
}

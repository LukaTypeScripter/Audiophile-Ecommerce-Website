import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {LayoutFooterComponent} from "./layout/layout-footer/layout-footer.component";
import {LayoutHeaderComponent} from "./layout/layout-header/layout-header.component";
import {LayoutBodyComponent} from "./layout/layout-body/layout-body.component";
import {CartModalComponent} from "./layout/layout-body/cart-modal/cart-modal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, LayoutFooterComponent, LayoutHeaderComponent, LayoutBodyComponent, CartModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}

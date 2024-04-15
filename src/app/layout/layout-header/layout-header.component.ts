import {Component, signal} from '@angular/core';
import {DropDownComponent} from "../../shared/drop-down/drop-down.component";
import {CommonModule} from "@angular/common";
import {CartModalComponent} from "../layout-body/cart-modal/cart-modal.component";

@Component({
  selector: 'audiophile-layout-header',
  standalone: true,
  imports: [DropDownComponent, CommonModule, CartModalComponent],
  templateUrl: './layout-header.component.html',
  styleUrl: './layout-header.component.scss',

})
export class LayoutHeaderComponent {
  isOpen = signal(false);
  cartIsOpen = signal(false);
  openDropDown() {
    this.isOpen.set(!this.isOpen())
    if(this.isOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
}
}

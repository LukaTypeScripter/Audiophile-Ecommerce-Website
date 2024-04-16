import {Component, inject} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {CartService} from "../../../lib/services/cart.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'audiophile-cart-modal',
  standalone: true,
  imports: [
    ButtonComponent,
    CommonModule
  ],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.scss'
})
export class CartModalComponent {
  btnConfig:any = {
    configOne: {
      class:"btn-header btn-default full-width",
      text:"Add to cart",
      spaceFromTop:"0"
    },
  }
  private cartService = inject(CartService)
  cart = this.cartService.cart();
  removeAll() {
    this.cartService.removeAll()
  }
}

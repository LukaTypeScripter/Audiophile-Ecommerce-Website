import {Component, inject} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {CartService} from "../../../lib/services/cart.service";

@Component({
  selector: 'audiophile-cart-modal',
  standalone: true,
  imports: [
    ButtonComponent
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
  cartService = inject(CartService)

}

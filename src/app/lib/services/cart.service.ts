import {computed, Injectable, signal} from '@angular/core';
import {ProductsService} from "./products.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<any>({
    products: [],
    totalAmount: 0,
    totalQuantity: 0
  })
  constructor(private productService:ProductsService) {

  }


  public addItem(item: any, quantityToAdd: number = 1) {
    this.cart.update((currentCart) => {
      const existingItem = currentCart.products.find((i: any) => i.id === item.id);
      if (existingItem ) {
        existingItem.quantity += quantityToAdd;
      } else {
        item.quantity = quantityToAdd;
        currentCart.products.push(item);
      }
      currentCart.totalAmount += item.price * item.quantity;
      let productSet = new Set(currentCart.products.map((product: any) => product.id));
      currentCart.products = Array.from(productSet, (productId: any) => currentCart.products.find((product: any) => product.id === productId));
      return currentCart;
    });
  }
  removeAll() {
    this.cart().products = []
    this.cart().totalAmount = 0
    this.cart().totalQuantity = 0
  }

}

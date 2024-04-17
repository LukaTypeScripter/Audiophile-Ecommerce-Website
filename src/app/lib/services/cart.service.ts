import {computed, Injectable, signal} from '@angular/core';
import {ProductsService} from "./products.service";
import {BehaviorSubject} from "rxjs";
import {Product} from "../shared/product";
import {Cart} from "../shared/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Cart>({
    products: [],
    totalAmount: 0,
    totalQuantity: 0
  })
  public addItem(item: Product, quantityToAdd: number = 1) {
    this.cart.update((currentCart) => {
      const existingItem = currentCart.products.find((i: Product) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += quantityToAdd;
      } else {
        item.quantity = quantityToAdd;
        currentCart.products.push(item);
      }
      currentCart.totalAmount += item.price * item.quantity;
      let productSet:Set<number[]> = new Set(currentCart.products.map((product: Product) => product.id));
      currentCart.products = Array.from(productSet as any, (productId: number) => currentCart.products.find((product: Product) => product.id === productId));
      return currentCart;
    });
  }
  removeAll() {
    this.cart().products = []
    this.cart().totalAmount = 0
    this.cart().totalQuantity = 0
  }

  onIncrementQuantity(item: Product, quantityToAdd: number = 1, type:string) {
    this.cart.update((currentCart) => {
      const existingItem = currentCart.products.find((i:Product) => i.id === item.id);
      const currentIndex = currentCart.products.findIndex((i:Product) => i.id === item.id)
      if(existingItem && type === 'i') {
        existingItem.quantity += quantityToAdd;
      } else if(existingItem && type === 'd') {
        existingItem.quantity -= quantityToAdd;
      }
      if(existingItem.quantity < 1) {
        currentCart.products.splice(currentIndex, 1);
      }
      type === 'i' ?  currentCart.totalAmount += item.price :  currentCart.totalAmount -= item.price;
      return currentCart;
    });
  }



}

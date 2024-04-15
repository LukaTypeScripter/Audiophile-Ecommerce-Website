import {computed, Injectable, signal} from '@angular/core';
import {ProductsService} from "./products.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  specificCartObject = signal<any>({})
  cart = signal<any>({
    products: [],
    totalAmount: 0,
    totalQuantity: 0
  })
  constructor(private productService:ProductsService) {
    setTimeout(() => {
      this.cart.update((item) => {

          item.products = [...this.specificCartObject().includedItems
          ]
        console.log(item,"alah");
      })
    })



  }

  private calculateTotalAmount(items:any) {
    console.log(this.specificCartObject(),'signal;')
    // return items.reduce((total:any, item:any) => total + item.price*item.quantity,0)
  }
}

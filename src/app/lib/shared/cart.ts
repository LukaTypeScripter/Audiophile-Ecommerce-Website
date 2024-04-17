import {Product} from "./product";

export interface Cart {
  products?: Product | any,
  totalAmount: 0,
  totalQuantity: 0
}

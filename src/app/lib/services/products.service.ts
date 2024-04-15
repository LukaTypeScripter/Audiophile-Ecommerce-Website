import { Injectable } from '@angular/core';
import * as productData from "../../shared/products.json";
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productData = productData


  seeProduct(name: string) {
    return this.productData.products.find(item => item.slug.toLowerCase() === name.toLowerCase())
  }
}

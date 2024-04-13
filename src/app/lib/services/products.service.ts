import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import * as productData from "../../shared/products.json";
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productData = productData
  constructor(private http:HttpClient) {

    console.log(this.seeProduct('yx1-earphones'),this.productData)
  }

  seeProduct(name: string) {
    return this.productData.products.find(item => item.slug.toLowerCase() === name.toLowerCase())
  }
}

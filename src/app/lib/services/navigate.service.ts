import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {ProductsService} from "./products.service";

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(private router: Router, private productService: ProductsService) { }

  navigateToProduct(slug: string): void {
    const slugObj = this.productService.seeProduct(slug);
    this.router.navigate(['/products'], {
      queryParams: { slugObj: JSON.stringify(slugObj) }
    }).then(() => {
      window.scrollTo(0, 0);
    });
  }
}

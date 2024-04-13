import {Component, HostListener, inject, OnInit} from '@angular/core';
import {ButtonComponent} from "../../shared/button/button.component";
import {BtnConfig} from "../../lib/core/interfaces/btnConfig";
import {HomeHeaderComponent} from "./home-header/home-header.component";
import {CategoryItemsComponent} from "../../shared/category-items/category-items.component";
import {CommonModule} from "@angular/common";
import {configShop} from "../../shared/entites";
import {ShopComponent} from "../../shared/shop/shop.component";
import {ProductsService} from "../../lib/services/products.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'audiophile-home',
  standalone: true,
  imports: [
    ButtonComponent,
    HomeHeaderComponent,
    CategoryItemsComponent,
    CommonModule,
    ShopComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  btnConfig:any = {
    configOne: {
      class:"btn-header color",
      text:"See Product",
      spaceFromTop:"0"
    },
    configTwo: {
      class:"",
      text:"See Product",
      spaceFromTop:"0"
    }
  }
  protected readonly configShop = configShop;
  productService = inject(ProductsService)
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)
  onNavigate(slug: string): void {
    let slugObj = this.productService.seeProduct(slug) ;
    this.router.navigate(['/products'], {
      queryParams: { slugObj: JSON.stringify(slugObj) }
    }).then(() => {
      window.scrollTo(0, 0);
    })
  }
}

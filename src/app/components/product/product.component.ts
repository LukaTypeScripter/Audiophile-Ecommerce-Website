import {Component, inject} from '@angular/core';
import {ButtonComponent} from "../../shared/button/button.component";
import {ImageChangeService} from "../../lib/services/image-change.service";
import {CategoryItemsComponent} from "../../shared/category-items/category-items.component";
import {CommonModule} from "@angular/common";
import {configShop} from "../../shared/entites";
import {ShopComponent} from "../../shared/shop/shop.component";

@Component({
  selector: 'audiophile-product',
  standalone: true,
  imports: [
    ButtonComponent,
    CategoryItemsComponent,
    CommonModule,
    ShopComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  public imageChange:ImageChangeService = inject(ImageChangeService)
  btnConfig:any = {
    configOne: {
      class:"btn-header btn-default",
      text:"Add to cart",
      spaceFromTop:"0"
    },
    configTwo: {
      class:"btn-header btn-default",
      text:"see product",
      spaceFromTop:"0"
    },
  }
  protected readonly configShop = configShop;
}

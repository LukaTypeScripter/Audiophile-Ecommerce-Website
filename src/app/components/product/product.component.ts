import {Component, inject, OnInit, signal} from '@angular/core';
import {ButtonComponent} from "../../shared/button/button.component";
import {ImageChangeService} from "../../lib/services/image-change.service";
import {CategoryItemsComponent} from "../../shared/category-items/category-items.component";
import {CommonModule} from "@angular/common";
import {configShop} from "../../shared/entites";
import {ShopComponent} from "../../shared/shop/shop.component";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {map, Observable} from "rxjs";
import {NavigateService} from "../../lib/services/navigate.service";
import {CartService} from "../../lib/services/cart.service";
import {Product} from "../../lib/shared/product";

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
  styleUrl: './product.component.scss',
  providers:[HttpClient]
})
export class ProductComponent implements OnInit {
  specificProduct$!: Observable<any>
  count = signal(1);
  product = signal({});
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
  public imageChange:ImageChangeService = inject(ImageChangeService)
  private router = inject(ActivatedRoute)
  private route = inject(Router)
  private  navigateService = inject(NavigateService)
  private  cartService = inject(CartService)
  ngOnInit() {
    this.specificProduct$  = this.router.queryParams.pipe(map((params:Params) => {
      let productData = JSON.parse(params['slugObj']);
      this.product.set(productData)
      productData.categoryImage.mobile = this.extractPathDetails(productData.categoryImage.mobile);
      productData.gallery.first.mobile = this.extractPathDetails(productData.gallery.first.mobile)
      productData.gallery.second.mobile = this.extractPathDetails(productData.gallery.second.mobile)
      productData.gallery.third.mobile = this.extractPathDetails(productData.gallery.third.mobile)
      return productData
    }))
  }

   extractPathDetails(imagePath: string) {
    const pathSegments = imagePath.split('/');
    const folderName = pathSegments.slice(-3, -1)[0];
    const fileName= pathSegments.slice(-1)[0];
    return { folderName, fileName };
  }
  onNavigation(name:string) {
    this.navigateService.navigateToProduct(name)
  }

  onQuantityChange(item:Product,quantity:number) {
    this.cartService.cart().products.push(this.product())
    this.cartService.addItem(item,quantity)
  }


  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {
    if (this.count() > 1) {
      this.count.set(this.count() - 1);
    }
  }
  goBack() {
    console.log("back")
    this.route.navigate(['/'])
  }
}

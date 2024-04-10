import {Component, inject} from '@angular/core';
import {ButtonComponent} from "../../shared/button/button.component";
import {ImageChangeService} from "../../lib/services/image-change.service";

@Component({
  selector: 'audiophile-product',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  public imageChange:ImageChangeService = inject(ImageChangeService)
  btnConfig:any = {

      class:"btn-header btn-default",
      text:"Add to cart",
      spaceFromTop:"0"

  }
}

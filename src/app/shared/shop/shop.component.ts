import { Component } from '@angular/core';
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'audiophile-shop',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  btnConfig:any = {

    configTwo: {
      class:"",
      text:"See Product",
      spaceFromTop:"0"
    }
  }
}

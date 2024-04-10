import {Component, input} from '@angular/core';
import {ConfigShop} from "../../lib/core/interfaces/configShop";

@Component({
  selector: 'audiophile-category-items',
  standalone: true,
  imports: [],
  templateUrl: './category-items.component.html',
  styleUrl: './category-items.component.scss'
})
export class CategoryItemsComponent {
    config = input<ConfigShop>()
}

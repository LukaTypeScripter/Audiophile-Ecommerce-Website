import {Component, input, OnChanges, SimpleChanges} from '@angular/core';
import {CategoryItemsComponent} from "../category-items/category-items.component";
import {CommonModule} from "@angular/common";
import {configShop} from "../entites";

@Component({
  selector: 'audiophile-drop-down',
  standalone: true,
  imports: [
    CategoryItemsComponent,
    CommonModule
  ],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.scss',

})
export class DropDownComponent {
  open = input(false)

  protected readonly configShop = configShop;
}

import {Component, input, OnChanges, SimpleChanges} from '@angular/core';
import {CategoryItemsComponent} from "../category-items/category-items.component";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {CommonModule} from "@angular/common";

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

}

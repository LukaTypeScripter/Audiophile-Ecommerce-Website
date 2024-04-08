import {Component, signal} from '@angular/core';
import {DropDownComponent} from "../../shared/drop-down/drop-down.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'audiophile-layout-header',
  standalone: true,
  imports: [DropDownComponent,CommonModule],
  templateUrl: './layout-header.component.html',
  styleUrl: './layout-header.component.scss',

})
export class LayoutHeaderComponent {
  isOpen = signal(false);
}

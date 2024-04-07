import {Component, signal} from '@angular/core';
import {DropDownComponent} from "../../shared/drop-down/drop-down.component";

@Component({
  selector: 'audiophile-layout-header',
  standalone: true,
  imports: [DropDownComponent],
  templateUrl: './layout-header.component.html',
  styleUrl: './layout-header.component.scss',

})
export class LayoutHeaderComponent {
  isOpen = signal(false);
}

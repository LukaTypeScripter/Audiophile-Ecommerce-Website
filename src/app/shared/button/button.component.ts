import {Component, input} from '@angular/core';
import {BtnConfig} from "../../lib/core/interfaces/btnConfig";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'audiophile-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  btnConfig = input<any>()

}

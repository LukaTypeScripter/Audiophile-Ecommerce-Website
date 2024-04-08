import {Component, HostListener, OnInit} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {BtnConfig} from "../../../lib/core/interfaces/btnConfig";

@Component({
  selector: 'audiophile-home-header',
  standalone: true,
    imports: [
        ButtonComponent
    ],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent implements OnInit{
  btnConfig:BtnConfig = {
    class:"btn-header",
    text:"See Product",
    spaceFromTop:"3rem"
  }
  headerImg = '/assets/images/home/mobile/image-hero.jpg'

  ngOnInit() {
    this.setHeaderImage();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:Event) {
    this.setHeaderImage();
  }
  setHeaderImage() {
    const innerWidth = window?.innerWidth;
    this.btnConfig.spaceFromTop = window?.innerWidth >= 768 ? '2.5rem' : ''
    switch (true) {
      case innerWidth >= 1024:
        this.headerImg = '/assets/images/home/desktop/image-hero.jpg';
        break;
      case innerWidth >= 768:
        this.headerImg = '/assets/images/home/tablet/image-hero.jpg';
        break;
      default:
        this.headerImg = '/assets/images/home/mobile/image-hero.jpg';
        break;
    }
  }
}

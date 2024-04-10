import {HostListener, Injectable} from '@angular/core';
import {ResizeService} from "./resize.service";

@Injectable({
  providedIn: 'root'
})
export class ImageChangeService {
  screenSize!: 'mobile' | 'tablet' | 'desktop';
  constructor(private resizeService: ResizeService) {
    this.resizeService.resizeEvent.subscribe(() => {
      this.updateScreenSize();
    });
    this.updateScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {

  }
  private updateScreenSize(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      this.screenSize = 'mobile';
    } else if (screenWidth >= 768 && screenWidth < 1440) {
      this.screenSize = 'tablet';
    } else {
      this.screenSize = 'desktop';
    }
  }

  getImageUrl(imageName: string): string {
    let imageUrl = '';

    if (this.screenSize === 'mobile') {
      imageUrl = `./assets/images/category-headphones/mobile/${imageName}`;
    } else if (this.screenSize === 'tablet') {
      imageUrl = `./assets/images/category-headphones/tablet/${imageName}`;
    } else {
      imageUrl = `./assets/images/category-headphones/desktop/${imageName}`;
    }

    return imageUrl;
  }
}

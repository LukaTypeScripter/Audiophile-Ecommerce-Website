import {HostListener, Injectable} from '@angular/core';
import {ResizeService} from "./resize.service";
import {unsub} from "../../unsub.class";
import {map, takeUntil} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageChangeService extends unsub{
  screenSize!: 'mobile' | 'tablet' | 'desktop';
  constructor(private resizeService: ResizeService) {
    super()
    this.resizeService.resizeEvent.pipe(map((_) => {
      this.updateScreenSize();
    }),takeUntil(this.unsubscribe$)).subscribe()
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

  getImageUrl(imageName: string,pathName:string): string {
    let imageUrl = '';
    if (this.screenSize === 'mobile') {
      imageUrl = `./assets/images/${pathName}/mobile/${imageName}`;
    } else if (this.screenSize === 'tablet') {
      imageUrl = `./assets/images/${pathName}/tablet/${imageName}`;
    } else {
      imageUrl = `./assets/images/${pathName}/desktop/${imageName}`;
    }
    return imageUrl;
  }
}
